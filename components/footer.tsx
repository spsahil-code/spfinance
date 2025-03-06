import Link from "next/link"
import { Calculator, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted py-16 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Calculator className="h-6 w-6 text-primary" />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-primary/20 group-hover:ring-primary/40 transition-colors" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Petkar Accounting
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional accounting services for businesses and individuals. Simplifying your financial management.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <div className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors">
                  <Facebook className="h-4 w-4" />
                </div>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <div className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors">
                  <Twitter className="h-4 w-4" />
                </div>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <div className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors">
                  <Instagram className="h-4 w-4" />
                </div>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <div className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </div>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/itr-filing"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></span>
                  ITR Filing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/gst-returns"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></span>
                  GST Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/services/bookkeeping"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></span>
                  Bookkeeping
                </Link>
              </li>
              <li>
                <Link
                  href="/services/tax-planning"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></span>
                  Tax Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/financial-advisory"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></span>
                  Financial Advisory
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Company
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></span>
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Contact
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm text-muted-foreground">
                  123 Business Avenue, Mumbai, Maharashtra 400001, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <Link
                  href="tel:+919876543210"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 98765 43210
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <Link
                  href="mailto:info@petkaraccounting.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@petkaraccounting.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-muted-foreground/20 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Petkar Accounting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

