import Sparkles from "@/components/Sparkles"

const trends = [
  {
    title: "Global Inflation Rates on the Rise",
    description: "An analysis of increasing inflation rates across major economies and their potential impacts.",
    date: "2023-06-15",
  },
  {
    title: "Emerging Markets: Opportunities and Risks",
    description: "Exploring the current state of emerging markets and what it means for global investors.",
    date: "2023-06-10",
  },
  {
    title: "The Future of Cryptocurrencies in Global Finance",
    description: "Examining the role of digital currencies in shaping the future of international financial systems.",
    date: "2023-06-05",
  },
  {
    title: "Supply Chain Disruptions: Economic Consequences",
    description: "Analyzing the ongoing global supply chain issues and their effects on various industries.",
    date: "2023-05-30",
  },
]

export default function MarketTrendsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Sparkles />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-primary">Market Trends</h1>
        <p className="text-xl mb-12 text-muted-foreground">
          Stay informed with our latest analyses of global market trends and economic developments.
        </p>
        <div className="grid gap-8">
          {trends.map((trend, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2 text-primary">{trend.title}</h2>
              <p className="text-muted-foreground mb-4">{trend.description}</p>
              <p className="text-sm text-accent">{trend.date}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

