"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, FileText, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { submitITRForm } from "./actions"

export default function ITRFilingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [panFile, setPanFile] = useState<File | null>(null)
  const [aadhaarFile, setAadhaarFile] = useState<File | null>(null)
  const [animateItems, setAnimateItems] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setAnimateItems(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(event.currentTarget)

      // Add file objects to FormData
      if (panFile) {
        formData.set("panCard", panFile)
      }

      if (aadhaarFile) {
        formData.set("aadhaarCard", aadhaarFile)
      }

      await submitITRForm(formData)
      setIsSuccess(true)
      // Reset form
      event.currentTarget.reset()
      setPanFile(null)
      setAadhaarFile(null)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <div
              className={`space-y-2 transition-all duration-700 ${animateItems ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                ITR Filing Service
              </h1>
              <p className="text-muted-foreground md:text-xl/relaxed max-w-[800px] mx-auto">
                Professional preparation and filing of income tax returns for individuals and businesses
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Form Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex justify-start mb-8">
            <Link
              href="/services"
              className="group flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <div className="mr-2 h-8 w-8 rounded-full flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <ArrowLeft className="h-4 w-4" />
              </div>
              <span>Back to Services</span>
            </Link>
          </div>

          {isSuccess ? (
            <Card className="max-w-md mx-auto shadow-lg border-0 overflow-hidden animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-500/5 z-0"></div>
              <CardHeader className="relative z-10">
                <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-center text-2xl text-green-600">Thank You!</CardTitle>
                <CardDescription className="text-center">
                  Your ITR filing request has been submitted successfully.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4 relative z-10">
                <p>Our executive will call you soon to discuss your ITR filing requirements.</p>
                <p>If you have any questions, please feel free to contact us.</p>
              </CardContent>
              <CardFooter className="flex justify-center relative z-10">
                <Link href="/services">
                  <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                    Explore Other Services
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ) : (
            <Card className="max-w-md mx-auto shadow-xl border-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 z-0"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl">Submit Your Details</CardTitle>
                <CardDescription>
                  Please fill in your details and upload the required documents for ITR filing
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6 relative z-10">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      required
                      className="h-11 px-4 bg-white/50 backdrop-blur-sm border-muted focus:border-primary input-highlight"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      required
                      className="h-11 px-4 bg-white/50 backdrop-blur-sm border-muted focus:border-primary input-highlight"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      required
                      className="h-11 px-4 bg-white/50 backdrop-blur-sm border-muted focus:border-primary input-highlight"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="panCard" className="text-sm font-medium">
                      PAN Card
                    </Label>
                    <div className="relative">
                      <Input
                        id="panCard"
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf"
                        required
                        className="h-11 px-4 bg-white/50 backdrop-blur-sm border-muted focus:border-primary input-highlight file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                        onChange={(e) => {
                          if (e.target.files && e.target.files.length > 0) {
                            setPanFile(e.target.files[0])
                          }
                        }}
                      />
                      {panFile && (
                        <div className="mt-2 text-sm text-green-600 flex items-center">
                          <FileText className="h-4 w-4 mr-1" />
                          {panFile.name}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="aadhaarCard" className="text-sm font-medium">
                      Aadhaar Card
                    </Label>
                    <div className="relative">
                      <Input
                        id="aadhaarCard"
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf"
                        required
                        className="h-11 px-4 bg-white/50 backdrop-blur-sm border-muted focus:border-primary input-highlight file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                        onChange={(e) => {
                          if (e.target.files && e.target.files.length > 0) {
                            setAadhaarFile(e.target.files[0])
                          }
                        }}
                      />
                      {aadhaarFile && (
                        <div className="mt-2 text-sm text-green-600 flex items-center">
                          <FileText className="h-4 w-4 mr-1" />
                          {aadhaarFile.name}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Button
                    type="submit"
                    className="w-full h-11 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Upload className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Details"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          )}
        </div>
      </section>

      {/* Service Details */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
                Our ITR Filing Service
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At Petkar Accounting, we provide comprehensive Income Tax Return (ITR) filing services for individuals
                  and businesses. Our team of tax experts ensures accurate and timely filing of your returns.
                </p>
                <p>
                  We handle all types of ITR forms including ITR-1, ITR-2, ITR-3, and ITR-4, catering to different
                  income sources and taxpayer categories.
                </p>
                <p>
                  Our process is simple: submit your details and documents, and our executive will contact you to
                  collect additional information if needed. We'll prepare your return, review it with you, and file it
                  on your behalf.
                </p>
              </div>
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-bold">Documents Required:</h3>
                <ul className="space-y-3">
                  {[
                    "PAN Card",
                    "Aadhaar Card",
                    "Form 16 (if employed)",
                    "Bank statements",
                    "Investment proofs",
                    "Property documents (if applicable)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur-xl opacity-30 animate-pulse-slow"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="/pa-logo.svg"
                    alt="ITR Filing Service"
                    className="rounded-xl object-contain p-12"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

