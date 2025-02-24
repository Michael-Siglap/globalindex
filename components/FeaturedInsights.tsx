import Link from "next/link"

const insights = [
  {
    title: "The Impact of Coffee Prices on Global Economies",
    excerpt: "Exploring how fluctuations in coffee prices affect various economies around the world.",
    link: "/blog/coffee-prices-impact",
  },
  {
    title: "Tech Giants and Currency Valuation",
    excerpt: "Analyzing how the stock performance of tech companies influences currency strength.",
    link: "/blog/tech-giants-currency-valuation",
  },
  {
    title: "Fast Food Indices: More Than Just Big Macs",
    excerpt: "Comparing different fast food indices and their effectiveness in measuring purchasing power parity.",
    link: "/blog/fast-food-indices-comparison",
  },
]

const FeaturedInsights = () => {
  return (
    <section className="py-12 bg-secondary-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary-300">Featured Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="bg-secondary-700 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary-100">{insight.title}</h3>
              <p className="text-secondary-300 mb-4">{insight.excerpt}</p>
              <Link href={insight.link} className="text-accent-400 hover:text-accent-300">
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedInsights

