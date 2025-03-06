import Link from "next/link"
import { CheckCircle, HelpCircle, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Transparent Pricing</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that fits your business needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col p-6 bg-background shadow-lg rounded-lg border">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Basic</h3>
                <p className="text-muted-foreground">For individuals and small businesses</p>
              </div>
              <div className="mt-4 text-4xl font-bold">
                ₹4,999<span className="text-sm font-normal text-muted-foreground">/year</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
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
                <li className="flex items-center text-muted-foreground">
                  <X className="mr-2 h-4 w-4" />
                  <span>GST Return Filing</span>
                </li>
                <li className="flex items-center text-muted-foreground">
                  <X className="mr-2 h-4 w-4" />
                  <span>Tax Planning</span>
                </li>
                <li className="flex items-center text-muted-foreground">
                  <X className="mr-2 h-4 w-4" />
                  <span>Dedicated Account Manager</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col p-6 bg-background shadow-lg rounded-lg border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Business</h3>
                <p className="text-muted-foreground">For growing businesses</p>
              </div>
              <div className="mt-4 text-4xl font-bold">
                ₹9,999<span className="text-sm font-normal text-muted-foreground">/year</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
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
                  <span>Basic Tax Planning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Priority Email & Phone Support</span>
                </li>
                <li className="flex items-center text-muted-foreground">
                  <X className="mr-2 h-4 w-4" />
                  <span>Dedicated Account Manager</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col p-6 bg-background shadow-lg rounded-lg border">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <p className="text-muted-foreground">For established businesses</p>
              </div>
              <div className="mt-4 text-4xl font-bold">
                ₹19,999<span className="text-sm font-normal text-muted-foreground">/year</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
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
                  <span>Comprehensive Financial Reports</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Advanced Tax Planning & Advisory</span>
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
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Pricing Table */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Detailed Service Pricing</h2>
              <p className="max-w-[900px] text-muted-foreground">
                Individual service pricing for clients with specific needs
              </p>
            </div>
          </div>

          <TooltipProvider>
            <Table>
              <TableCaption>All prices are in Indian Rupees (₹) and subject to applicable taxes.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Service</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      ITR-1 (Salary Income)
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-sm">
                            For individuals having income from salary and one house property
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TableCell>
                  <TableCell>Filing of ITR-1 for individuals with salary income</TableCell>
                  <TableCell className="text-right">₹1,499</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      ITR-2
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-sm">
                            For individuals and HUFs with income from salary, house property, capital gains, etc.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TableCell>
                  <TableCell>Filing of ITR-2 for individuals with multiple income sources</TableCell>
                  <TableCell className="text-right">₹2,499</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      ITR-3 (Business Income)
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-sm">
                            For individuals and HUFs having income from business or profession
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TableCell>
                  <TableCell>Filing of ITR-3 for business owners and professionals</TableCell>
                  <TableCell className="text-right">₹3,999</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      ITR-4 (Presumptive Income)
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 ml-2 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-sm">For individuals, HUFs and firms with presumptive income</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TableCell>
                  <TableCell>Filing of ITR-4 for presumptive income scheme</TableCell>
                  <TableCell className="text-right">₹2,999</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Monthly GST Return Filing</TableCell>
                  <TableCell>Filing of GSTR-1 and GSTR-3B on a monthly basis</TableCell>
                  <TableCell className="text-right">₹1,500/month</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Quarterly GST Return Filing</TableCell>
                  <TableCell>Filing of quarterly GST returns for small businesses</TableCell>
                  <TableCell className="text-right">₹3,500/quarter</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Annual GST Return (GSTR-9)</TableCell>
                  <TableCell>Preparation and filing of annual GST return</TableCell>
                  <TableCell className="text-right">₹5,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Basic Bookkeeping</TableCell>
                  <TableCell>Monthly transaction recording and basic financial statements</TableCell>
                  <TableCell className="text-right">₹3,000/month</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Comprehensive Bookkeeping</TableCell>
                  <TableCell>Complete financial record keeping with detailed reports</TableCell>
                  <TableCell className="text-right">₹5,000/month</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Tax Planning Consultation</TableCell>
                  <TableCell>One-time consultation for tax saving strategies</TableCell>
                  <TableCell className="text-right">₹2,500</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TooltipProvider>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground">Common questions about our pricing and services</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Do you offer customized packages?</h3>
              <p className="text-muted-foreground">
                Yes, we understand that every business has unique needs. We can create customized packages tailored to
                your specific requirements. Please contact us to discuss your needs.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Are there any hidden fees?</h3>
              <p className="text-muted-foreground">
                No, we believe in complete transparency. All our pricing is clearly stated, and there are no hidden
                fees. Any additional services required will be discussed and agreed upon before proceeding.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Can I upgrade my plan later?</h3>
              <p className="text-muted-foreground">
                You can upgrade your plan at any time as your business grows. We'll prorate the difference and apply it
                to your new plan.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Do you offer discounts for long-term commitments?</h3>
              <p className="text-muted-foreground">
                Yes, we offer discounts for clients who commit to annual contracts. Please contact us to discuss the
                available discounts for long-term engagements.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept various payment methods including bank transfers, credit/debit cards, UPI, and digital wallets
                for your convenience.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Is there a refund policy?</h3>
              <p className="text-muted-foreground">
                We offer a satisfaction guarantee. If you're not satisfied with our services, please contact us within 7
                days of service delivery, and we'll work to resolve the issue or provide a refund as appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today for a free consultation and discover how our accounting services can benefit your
                business
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

