import Link from "next/link"
import { Calculator, CheckCircle, ChevronRight, FileText, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Professional Accounting Services for Your Business
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Expert financial solutions including ITR filing, GST returns, and comprehensive accounting services to
                  help your business thrive.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/services">
                  <Button className="px-8">Explore Services</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-8">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/pa-logo.svg"
                alt="Petkar Accounting Services"
                className="rounded-xl object-contain p-12"
                width={550}
                height={550}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive accounting solutions tailored to your business needs
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ServiceCard
              icon={<FileText className="h-10 w-10 text-primary" />}
              title="Income Tax Return (ITR) Filing"
              description="Professional preparation and filing of income tax returns for individuals and businesses."
              link="/services/itr-filing"
            />
            <ServiceCard
              icon={<Calculator className="h-10 w-10 text-primary" />}
              title="GST Returns"
              description="Timely and accurate filing of GST returns to ensure compliance with tax regulations."
              link="/services/gst-returns"
            />
            <ServiceCard
              icon={<FileText className="h-10 w-10 text-primary" />}
              title="Bookkeeping Services"
              description="Comprehensive bookkeeping services to maintain accurate financial records."
              link="/services/bookkeeping"
            />
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="gap-1">
                View All Services
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose Petkar Accounting
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We deliver excellence in accounting services with a focus on accuracy, timeliness, and client
                satisfaction
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <CheckCircle className="h-8 w-8 text-primary" />
                <CardTitle>Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our team of certified accountants brings years of experience and expertise to handle all your
                  accounting needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <CheckCircle className="h-8 w-8 text-primary" />
                <CardTitle>Personalized Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We provide tailored solutions that address your specific business requirements and financial goals.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <CheckCircle className="h-8 w-8 text-primary" />
                <CardTitle>Timely Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We ensure all filings and reports are completed and submitted well before deadlines to avoid
                  penalties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Transparent Pricing</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Affordable accounting solutions with no hidden fees
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>For individuals and small businesses</CardDescription>
                <div className="mt-4 text-4xl font-bold">
                  ₹4,999<span className="text-sm font-normal text-muted-foreground">/year</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>ITR Filing (Individual)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Basic Bookkeeping</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Quarterly Financial Review</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Email Support</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Link href="/pricing">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </Card>
            <Card className="flex flex-col border-primary">
              <CardHeader>
                <CardTitle>Business</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
                <div className="mt-4 text-4xl font-bold">
                  ₹9,999<span className="text-sm font-normal text-muted-foreground">/year</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>ITR Filing (Business)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>GST Return Filing (Monthly)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Complete Bookkeeping</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Monthly Financial Reports</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Priority Email & Phone Support</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Link href="/pricing">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For established businesses</CardDescription>
                <div className="mt-4 text-4xl font-bold">
                  ₹19,999<span className="text-sm font-normal text-muted-foreground">/year</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>ITR Filing (Corporate)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>GST Return Filing (Monthly)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Full Accounting Services</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Tax Planning & Advisory</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Dedicated Account Manager</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>24/7 Priority Support</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Link href="/pricing">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </Card>
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/pricing">
              <Button variant="outline" className="gap-1">
                View Detailed Pricing
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from businesses that have transformed their financial management with our services
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <TestimonialCard
              quote="Petkar Accounting has been instrumental in streamlining our tax filing process. Their expertise has saved us both time and money."
              author="Rajesh Sharma"
              position="CEO, TechSolutions India"
            />
            <TestimonialCard
              quote="The team at Petkar Accounting provides exceptional service. Their attention to detail and proactive approach has helped us maintain perfect compliance."
              author="Priya Patel"
              position="Director, Retail Ventures"
            />
            <TestimonialCard
              quote="We've been working with Petkar Accounting for over 3 years now. Their comprehensive accounting services have given us peace of mind to focus on growing our business."
              author="Amit Desai"
              position="Founder, HealthFirst Clinics"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Financial Management?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today for a free consultation and discover how our accounting services can benefit your
                business
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="px-8">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

