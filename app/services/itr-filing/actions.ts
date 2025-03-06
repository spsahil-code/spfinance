"use server"

import { revalidatePath } from "next/cache"
import { supabase } from "@/lib/supabase"
import { sendSubmissionEmail } from "@/lib/email"

// Add new submission
export const submitITRForm = async (formData: FormData) => {
  try {
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const panCard = formData.get("panCard") as File
    const aadhaarCard = formData.get("aadhaarCard") as File

    // Upload PAN Card to Supabase Storage
    const panCardBuffer = await panCard.arrayBuffer()
    const panCardFileName = `${Date.now()}-${panCard.name}`
    const { data: panCardData, error: panCardError } = await supabase.storage
      .from('itr-documents')
      .upload(`pan-cards/${panCardFileName}`, panCardBuffer, {
        contentType: panCard.type,
      })

    if (panCardError) throw new Error(`Error uploading PAN card: ${panCardError.message}`)

    // Upload Aadhaar Card to Supabase Storage
    const aadhaarCardBuffer = await aadhaarCard.arrayBuffer()
    const aadhaarCardFileName = `${Date.now()}-${aadhaarCard.name}`
    const { data: aadhaarCardData, error: aadhaarCardError } = await supabase.storage
      .from('itr-documents')
      .upload(`aadhaar-cards/${aadhaarCardFileName}`, aadhaarCardBuffer, {
        contentType: aadhaarCard.type,
      })

    if (aadhaarCardError) throw new Error(`Error uploading Aadhaar card: ${aadhaarCardError.message}`)

    // Get public URLs for the uploaded files
    const { data: panCardUrl } = supabase.storage
      .from('itr-documents')
      .getPublicUrl(`pan-cards/${panCardFileName}`)

    const { data: aadhaarCardUrl } = supabase.storage
      .from('itr-documents')
      .getPublicUrl(`aadhaar-cards/${aadhaarCardFileName}`)

    // Insert submission data into Supabase
    const { error: insertError } = await supabase
      .from('itr_submissions')
      .insert({
        name,
        phone,
        email,
        pan_card_url: panCardUrl.publicUrl,
        aadhaar_card_url: aadhaarCardUrl.publicUrl,
        status: 'pending'
      })

    if (insertError) throw new Error(`Error saving submission: ${insertError.message}`)

    // Send email notification
    await sendSubmissionEmail({
      name,
      phone,
      email,
      panCardUrl: panCardUrl.publicUrl,
      aadhaarCardUrl: aadhaarCardUrl.publicUrl
    })

    // Revalidate the admin page
    revalidatePath("/admin/itr-submissions")

    return { success: true }
  } catch (error) {
    console.error('Error in submitITRForm:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error occurred' }
  }
}

