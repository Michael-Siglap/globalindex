import Sparkles from "@/components/Sparkles"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Sparkles />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-primary">Frequently Asked Questions</h1>
        <p className="text-xl mb-12 text-muted-foreground">
          Find answers to common questions about Economic Pulse and our indices.
        </p>
        {/* Add FAQ content here */}
      </main>
    </div>
  )
}

