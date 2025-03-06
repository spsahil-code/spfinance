import Link from "next/link"
import { Calculator, ChevronRight, FileText, LineChart, PieChart, Receipt, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive accounting solutions tailored to your business needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Income Tax Return (ITR) Filing</CardTitle>
                <CardDescription>Professional preparation and filing of income tax returns</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Individual ITR filing (ITR-1, ITR-2, ITR-3, ITR-4)</li>
                  <li>Business/Professional ITR filing</li>
                  <li>Capital gains calculation and reporting</li>
                  <li>Foreign income reporting</li>
                  <li>Tax deduction optimization</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/services/itr-filing" className="w-full">
                  <Button variant="outline" className="w-full justify-between">
                    Learn More
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <Calculator className="h-10 w-10 text-primary mb-2" />
                <CardTitle>GST Returns</CardTitle>
                <CardDescription>Timely and accurate filing of GST returns</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>GSTR-1 filing (Outward supplies)</li>
                  <li>GSTR-3B filing (Monthly/Quarterly summary)</li>
                  <li>GSTR-9 filing (Annual return)</li>
                  <li>Input tax credit reconciliation</li>
                  <li>GST compliance management</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/services/gst-returns" className="w-full">
                  <Button variant="outline" className="w-full justify-between">
                    Learn More
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <Receipt className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Bookkeeping Services</CardTitle>
                <CardDescription>Comprehensive bookkeeping for accurate financial records</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Daily/weekly/monthly transaction recording</li>
                  <li>Bank reconciliation</li>
                  <li>Accounts receivable management</li>
                  <li>Accounts payable management</li>
                  <li>Financial statement preparation</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/services/bookkeeping" className="w-full">
                  <Button variant="outline" className="w-full justify-between">
                    Learn More
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <Wallet className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Tax Planning & Advisory</CardTitle>
                <CardDescription>Strategic tax planning to minimize tax liability</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Tax-saving investment advice</li>
                  <li>Business structure optimization</li>
                  <li>Deduction and exemption planning</li>
                  <li>Advance tax calculation</li>
                  <li>Tax notice assistance</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/services/tax-planning" className="w-full">
                  <Button variant="outline" className="w-full justify-between">
                    Learn More
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <LineChart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Financial Advisory</CardTitle>
                <CardDescription>Expert financial guidance for business growth</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Cash flow management</li>
                  <li>Budgeting and forecasting</li>
                  <li>Profit improvement strategies</li>
                  <li>Business performance analysis</li>
                  <li>Financial health assessment</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/services/financial-advisory" className="w-full">
                  <Button variant="outline" className="w-full justify-between">
                    Learn More
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <PieChart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Audit & Assurance</CardTitle>
                <CardDescription>Comprehensive audit services for compliance and assurance</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Internal audits</li>
                  <li>Statutory audits</li>
                  <li>Tax audits</li>
                  <li>GST audits</li>
                  <li>Due diligence reviews</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/services/audit-assurance" className="w-full">
                  <Button variant="outline" className="w-full justify-between">
                    Learn More
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Need a Custom Solution?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your specific accounting requirements
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

