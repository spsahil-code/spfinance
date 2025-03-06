import Link from "next/link"
import { Eye, Search, User, FileText, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { getSubmissions } from "@/app/services/itr-filing/actions"

export default function ITRSubmissionsPage() {
  const submissions = getSubmissions()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link
            href="/admin"
            className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            Admin Dashboard
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search submissions..."
                className="w-[200px] pl-8 rounded-full bg-muted/50 border-none focus-visible:ring-primary/50"
              />
            </div>
            <Button variant="outline" size="sm" className="rounded-full">
              <User className="h-4 w-4 mr-2" />
              Admin
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  ITR Filing Submissions
                </h1>
                <p className="text-muted-foreground">View and manage client submissions for ITR filing</p>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="h-9">
                  <FileText className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button
                  size="sm"
                  className="h-9 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Calls
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-md border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Total Submissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{submissions.length}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {submissions.length > 0 ? "+1 from yesterday" : "No submissions yet"}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-md border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Pending Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{submissions.length}</div>
                  <p className="text-xs text-muted-foreground mt-1">Requires your attention</p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-md border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Completed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">0</div>
                  <p className="text-xs text-muted-foreground mt-1">Successfully processed</p>
                </CardContent>
              </Card>
            </div>

            {submissions.length === 0 ? (
              <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-md border-0">
                <CardHeader>
                  <CardTitle>No submissions yet</CardTitle>
                  <CardDescription>
                    Client submissions will appear here once they fill out the ITR filing form.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center py-8">
                  <div className="text-center">
                    <FileText className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground">Waiting for new submissions</p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-md border-0 overflow-hidden">
                <CardHeader>
                  <CardTitle>Client Submissions</CardTitle>
                  <CardDescription>Total submissions: {submissions.length}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50 hover:bg-muted/70">
                          <TableHead className="font-medium">Name</TableHead>
                          <TableHead className="font-medium">Phone</TableHead>
                          <TableHead className="font-medium">Email</TableHead>
                          <TableHead className="font-medium">Submitted On</TableHead>
                          <TableHead className="font-medium">Documents</TableHead>
                          <TableHead className="font-medium">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {submissions.map((submission) => (
                          <TableRow key={submission.id} className="hover:bg-muted/30">
                            <TableCell className="font-medium">{submission.name}</TableCell>
                            <TableCell>{submission.phone}</TableCell>
                            <TableCell className="text-primary">{submission.email}</TableCell>
                            <TableCell>{new Date(submission.submittedAt).toLocaleDateString()}</TableCell>
                            <TableCell>
                              <div className="flex flex-col gap-2">
                                <Link
                                  href={`/uploads/${submission.panCardPath}`}
                                  target="_blank"
                                  className="flex items-center text-primary hover:text-primary/80 transition-colors"
                                >
                                  <Eye className="mr-1 h-4 w-4" />
                                  PAN Card
                                </Link>
                                <Link
                                  href={`/uploads/${submission.aadhaarCardPath}`}
                                  target="_blank"
                                  className="flex items-center text-primary hover:text-primary/80 transition-colors"
                                >
                                  <Eye className="mr-1 h-4 w-4" />
                                  Aadhaar Card
                                </Link>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Link href={`/admin/itr-submissions/${submission.id}`}>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="rounded-full h-8 px-3 bg-primary/5 hover:bg-primary/10 border-primary/20 hover:border-primary/30 text-primary"
                                >
                                  View Details
                                </Button>
                              </Link>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

