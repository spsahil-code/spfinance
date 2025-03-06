import Link from "next/link"
import { Award, Calculator, CheckCircle, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Petkar Accounting</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Your trusted partner for comprehensive accounting and financial services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2010, Petkar Accounting began with a simple mission: to provide accessible, high-quality
                  accounting services to businesses of all sizes. What started as a small practice has grown into a
                  trusted accounting firm serving clients across India.
                </p>
                <p>
                  Our founder, Rajesh Petkar, established the firm after recognizing that many small and medium-sized
                  businesses struggled with complex accounting requirements and tax regulations. With over 15 years of
                  experience in the financial sector, he assembled a team of dedicated professionals committed to
                  helping businesses navigate the complexities of financial management.
                </p>
                <p>
                  Today, Petkar Accounting has evolved into a full-service accounting firm, offering a wide range of
                  services from basic bookkeeping to comprehensive financial advisory. Our growth is a testament to our
                  commitment to excellence and the trust our clients place in us.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/pa-logo.svg"
                alt="Petkar Accounting Logo"
                className="rounded-lg object-contain p-12"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
              <p className="max-w-[900px] text-muted-foreground">
                The principles that guide our work and relationships
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <CheckCircle className="h-8 w-8 text-primary" />
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We uphold the highest ethical standards in all our dealings. Honesty and transparency are at the core
                  of our practice, ensuring our clients can trust our advice and services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Award className="h-8 w-8 text-primary" />
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We are committed to delivering exceptional service and accurate results. Our team continuously updates
                  their knowledge to ensure we provide the best possible advice.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Users className="h-8 w-8 text-primary" />
                <CardTitle>Client Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We prioritize understanding our clients' unique needs and goals. By building strong relationships, we
                  can provide personalized solutions that truly add value to their businesses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground">Meet the experts behind Petkar Accounting</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <img
                src="/pa-logo.svg"
                alt="Rajesh Petkar"
                className="rounded-full object-contain p-4 mb-4 bg-white"
                width={200}
                height={200}
              />
              <h3 className="text-xl font-bold">Rajesh Petkar</h3>
              <p className="text-primary font-medium">Founder & CEO</p>
              <p className="text-muted-foreground mt-2">
                With over 15 years of experience in accounting and finance, Rajesh leads our team with vision and
                expertise.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="/pa-logo.svg"
                alt="Priya Sharma"
                className="rounded-full object-contain p-4 mb-4 bg-white"
                width={200}
                height={200}
              />
              <h3 className="text-xl font-bold">Priya Sharma</h3>
              <p className="text-primary font-medium">Tax Director</p>
              <p className="text-muted-foreground mt-2">
                Priya specializes in tax planning and compliance, helping clients navigate complex tax regulations.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center">
                <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-4">
                  <Calculator className="h-16 w-16 text-primary" />
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-primary/20" />
                </div>
              </div>
              <h3 className="text-xl font-bold">Amit Patel</h3>
              <p className="text-primary font-medium">GST Specialist</p>
              <p className="text-muted-foreground mt-2">
                Amit is our GST expert, ensuring clients maintain compliance with all GST regulations and requirements.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/team">
              <Button variant="outline">View Full Team</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Journey</h2>
              <p className="max-w-[900px] text-muted-foreground">Key milestones in our growth and development</p>
            </div>
          </div>
          <div className="relative border-l border-primary/30 pl-8 ml-4 space-y-12">
            <div className="relative">
              <div className="absolute -left-12 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-xl font-bold">2010</h3>
                <p className="text-muted-foreground mt-2">
                  Petkar Accounting was founded by Rajesh Petkar as a small accounting practice in Mumbai.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-12 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-xl font-bold">2013</h3>
                <p className="text-muted-foreground mt-2">
                  Expanded services to include tax planning and advisory, growing our client base to over 100
                  businesses.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-12 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-xl font-bold">2017</h3>
                <p className="text-muted-foreground mt-2">
                  Established our GST compliance division following the implementation of GST in India.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-12 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-xl font-bold">2020</h3>
                <p className="text-muted-foreground mt-2">
                  Celebrated 10 years of service and launched our digital accounting solutions for remote clients.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-12 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Today</h3>
                <p className="text-muted-foreground mt-2">
                  Serving over 500 clients across India with a team of 25+ accounting professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Work With Us?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss how we can help your business thrive with our accounting expertise
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="px-8">
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

