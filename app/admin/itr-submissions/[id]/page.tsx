import Link from "next/link"
import { ArrowLeft, Download, Mail, Phone, Calendar, CheckCircle, Clock, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getSubmissions } from "@/app/services/itr-filing/actions"

export default function SubmissionDetailPage({ params }: { params: { id: string } }) {
  const submissions = getSubmissions()
  const submission = submissions.find((sub) => sub.id === params.id)

  if (!submission) {
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
          </div>
        </header>
        <main className="flex-1 py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-8 max-w-md mx-auto text-center">
              <div className="rounded-full w-20 h-20 bg-muted flex items-center justify-center mx-auto">
                <User className="h-10 w-10 text-muted-foreground/50" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Submission Not Found</h1>
                <p className="text-muted-foreground mt-2">
                  The submission you are looking for does not exist or has been removed.
                </p>
              </div>
              <Link href="/admin/itr-submissions">
                <Button className="mx-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Submissions
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    )
  }

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
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-3">
                <Link href="/admin/itr-submissions">
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                </Link>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Client Submission</h1>
                  <p className="text-muted-foreground">Detailed information about the submission</p>
                </div>
              </div>
              <Badge
                variant="outline"
                className="w-fit bg-amber-500/10 text-amber-600 border-amber-200 dark:border-amber-800/30 px-3 py-1"
              >
                <Clock className="mr-1 h-3.5 w-3.5" />
                Pending Review
              </Badge>
            </div>

            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 h-auto p-1 bg-muted/50 backdrop-blur-sm rounded-lg">
                <TabsTrigger
                  value="details"
                  className="rounded-md py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-primary data-[state=active]:shadow-sm"
                >
                  Details
                </TabsTrigger>
                <TabsTrigger
                  value="documents"
                  className="rounded-md py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-primary data-[state=active]:shadow-sm"
                >
                  Documents
                </TabsTrigger>
                <TabsTrigger
                  value="actions"
                  className="rounded-md py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-primary data-[state=active]:shadow-sm"
                >
                  Actions
                </TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="mt-6">
                <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-md border-0">
                  <CardHeader>
                    <CardTitle className="text-xl">Client Information</CardTitle>
                    <CardDescription>Personal details provided by the client</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium text-muted-foreground">Full Name</h3>
                        <p className="text-lg font-semibold">{submission.name}</p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium text-muted-foreground">Submission Date</h3>
                        <p className="text-lg">{new Date(submission.submittedAt).toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h3 className="text-sm font-medium text-muted-foreground">Contact Information</h3>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Phone className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{submission.phone}</p>
                            <p className="text-sm text-muted-foreground">Mobile</p>
                          </div>
                          <Button variant="outline" size="icon" className="ml-auto h-8 w-8 rounded-full">
                            <Phone className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Mail className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{submission.email}</p>
                            <p className="text-sm text-muted-foreground">Email</p>
                          </div>
                          <Button variant="outline" size="icon" className="ml-auto h-8 w-8 rounded-full">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-sm font-medium text-muted-foreground">Schedule a Call</h3>
                        <div className="p-4 rounded-lg bg-muted/50 flex flex-col items-center justify-center h-[calc(100%-24px)]">
                          <Calendar className="h-10 w-10 text-primary/50 mb-3" />
                          <p className="text-sm text-center text-muted-foreground mb-3">No call scheduled yet</p>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                          >
                            <Calendar className="mr-2 h-4 w-4" />
                            Schedule Call
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="mt-6">
                <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-md border-0">
                  <CardHeader>
                    <CardTitle className="text-xl">Uploaded Documents</CardTitle>
                    <CardDescription>Documents provided by the client</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-medium">PAN Card</h3>
                        <Link href={`/uploads/${submission.panCardPath}`} target="_blank" download>
                          <Button variant="outline" size="sm" className="h-8 rounded-full">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </Link>
                      </div>
                      <div className="border rounded-xl overflow-hidden bg-white dark:bg-gray-800">
                        <div className="relative aspect-[16/9] bg-muted flex items-center justify-center">
                          <img
                            src={`/uploads/${submission.panCardPath}`}
                            alt="PAN Card"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-medium">Aadhaar Card</h3>
                        <Link href={`/uploads/${submission.aadhaarCardPath}`} target="_blank" download>
                          <Button variant="outline" size="sm" className="h-8 rounded-full">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </Link>
                      </div>
                      <div className="border rounded-xl overflow-hidden bg-white dark:bg-gray-800">
                        <div className="relative aspect-[16/9] bg-muted flex items-center justify-center">
                          <img
                            src={`/uploads/${submission.aadhaarCardPath}`}
                            alt="Aadhaar Card"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="actions" className="mt-6">
                <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-md border-0">
                  <CardHeader>
                    <CardTitle className="text-xl">Process This Submission</CardTitle>
                    <CardDescription>Take action on this ITR filing submission</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button className="h-11 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Mark as Contacted
                      </Button>
                      <Button
                        variant="outline"
                        className="h-11 border-primary&#x2F;20 hover:border-primary&#x2F;40 bg-primary&#x2F;5 hover:bg-primary&#x2F;10 text-primary"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Request More Documents
                      </Button>
                      <Button variant="secondary" className="h-11">
                        <Calendar className="mr-2 h-4 w-4" />
                        Complete Filing
                      </Button>
                    </div>

                    <div className="rounded-lg border p-4 bg-muted&#x2F;30">
                      <h3 className="font-medium mb-2">Add Notes</h3>
                      <textarea
                        className="w-full h-24 p-3 rounded-md bg-white&#x2F;70 dark:bg-gray-800&#x2F;70 border-muted focus:border-primary resize-none"
                        placeholder="Add notes about this submission..."
                      ></textarea>
                      <div className="flex justify-end mt-2">
                        <Button size="sm">Save Notes</Button>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4 bg-amber-50 dark:bg-amber-950&#x2F;20 border-amber-200 dark:border-amber-800&#x2F;30">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900&#x2F;30 flex items-center justify-center mt-1">
                          <Clock className="h-5 w-5 text-amber-600 dark:text-amber-500" />
                        </div>
                        <div>
                          <h3 className="font-medium text-amber-800 dark:text-amber-500">Submission Status</h3>
                          <p className="text-sm text-amber-700 dark:text-amber-400 mt-1">
                            This submission is currently pending review. Take action to move it forward in the process.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      className="border-red-200 hover:border-red-300 bg-red-50 hover:bg-red-100 text-red-600"
                    >
                      Delete Submission
                    </Button>
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                      Update Status
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

