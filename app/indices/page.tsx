import Sparkles from "@/components/Sparkles"
import IndexCard from "@/components/IndexCard"
import { indices } from "@/data/indices"

export default function IndicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Sparkles />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-primary">Our Economic Indices</h1>
        <p className="text-xl mb-12 text-muted-foreground">
          Explore our unique set of economic indicators that provide insights into global economic trends and consumer
          behavior.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {indices.map((index) => (
            <IndexCard key={index.id} {...index} />
          ))}
        </div>
      </main>
    </div>
  )
}

