import IndexCard from "@/components/IndexCard"
import { indices } from "@/data/indices"
import Sparkles from "@/components/Sparkles"
import FeaturedInsights from "@/components/FeaturedInsights"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Sparkles />
      <main className="relative z-10">
        <HeroSection />

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-primary">Our Economic Indices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {indices.map((index) => (
                <IndexCard key={index.id} {...index} />
              ))}
            </div>
          </div>
        </section>

        <FeaturedInsights />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

