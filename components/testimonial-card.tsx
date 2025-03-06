import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  position: string
}

export default function TestimonialCard({ quote, author, position }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardContent className="pt-6 flex-1">
        <Quote className="h-8 w-8 text-primary/20 mb-2" />
        <p className="text-muted-foreground italic">{quote}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <div className="font-semibold">{author}</div>
        <div className="text-sm text-muted-foreground">{position}</div>
      </CardFooter>
    </Card>
  )
}

