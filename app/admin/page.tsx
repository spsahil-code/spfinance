import Link from "next/link"
import { FileText, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getSubmissions } from "@/app/services/itr-filing/actions"

export default function AdminDashboard() {
  const submissions = getSubmissions()

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-background">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link href="/admin" className="font-semibold">
            Admin Dashboard
          </Link>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage client submissions and services</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">ITR Filing Submissions</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{submissions.length}</div>
                  <p className="text-xs text-muted-foreground">Total client submissions</p>
                </CardContent>
                <CardFooter>
                  <Link href="/admin/itr-submissions" className="w-full">
                    <Button variant="outline" className="w-full">
                      View Submissions
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Submissions</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{submissions.length}</div>
                  <p className="text-xs text-muted-foreground">Awaiting processing</p>
                </CardContent>
                <CardFooter>
                  <Link href="/admin/itr-submissions" className="w-full">
                    <Button variant="outline" className="w-full">
                      Process Submissions
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Submissions</CardTitle>
                <CardDescription>Latest client submissions for ITR filing</CardDescription>
              </CardHeader>
              <CardContent>
                {submissions.length === 0 ? (
                  <p className="text-muted-foreground">No submissions yet</p>
                ) : (
                  <div className="space-y-4">
                    {submissions.slice(0, 5).map((submission) => (
                      <div key={submission.id} className="flex items-center justify-between border-b pb-4">
                        <div>
                          <p className="font-medium">{submission.name}</p>
                          <p className="text-sm text-muted-foreground">{submission.phone}</p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(submission.submittedAt).toLocaleDateString()}
                        </div>
                        <Link href={`/admin/itr-submissions/${submission.id}`}>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Link href="/admin/itr-submissions" className="w-full">
                  <Button variant="outline" className="w-full">
                    View All Submissions
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

