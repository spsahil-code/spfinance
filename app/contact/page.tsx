"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    contactPreference: "email",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, contactPreference: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for contacting us! We will get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      contactPreference: "email",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch with our team for any inquiries or to schedule a consultation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select onValueChange={handleSelectChange} value={formData.service}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="itr-filing">ITR Filing</SelectItem>
                      <SelectItem value="gst-returns">GST Returns</SelectItem>
                      <SelectItem value="bookkeeping">Bookkeeping</SelectItem>
                      <SelectItem value="tax-planning">Tax Planning</SelectItem>
                      <SelectItem value="financial-advisory">Financial Advisory</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Preferred Contact Method</Label>
                  <RadioGroup defaultValue="email" value={formData.contactPreference} onValueChange={handleRadioChange}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-contact" />
                      <Label htmlFor="email-contact">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone-contact" />
                      <Label htmlFor="phone-contact">Phone</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <MapPin className="h-6 w-6 text-primary" />
                      <CardTitle>Address</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>123 Business Avenue, Mumbai, Maharashtra 400001, India</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Phone className="h-6 w-6 text-primary" />
                      <CardTitle>Phone</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        <Link href="tel:+919876543210" className="hover:text-primary">
                          +91 98765 43210
                        </Link>
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Mail className="h-6 w-6 text-primary" />
                      <CardTitle>Email</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        <Link href="mailto:info@petkaraccounting.com" className="hover:text-primary">
                          info@petkaraccounting.com
                        </Link>
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>When We're Available</CardTitle>
                    <CardDescription>Our team is available during the following hours</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="font-medium">Monday - Friday:</div>
                      <div>9:00 AM - 6:00 PM</div>
                      <div className="font-medium">Saturday:</div>
                      <div>10:00 AM - 2:00 PM</div>
                      <div className="font-medium">Sunday:</div>
                      <div>Closed</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Find Us</h2>
              <p className="max-w-[900px] text-muted-foreground">Visit our office for a face-to-face consultation</p>
            </div>
          </div>
          <div className="aspect-video w-full rounded-lg overflow-hidden border">
            {/* In a real application, you would embed a Google Map here */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-muted-foreground">
                Map Placeholder - In a real application, a Google Map would be embedded here
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

