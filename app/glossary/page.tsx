import Sparkles from "@/components/Sparkles"

const glossaryTerms = [
  {
    term: "GDP (Gross Domestic Product)",
    definition:
      "The total monetary or market value of all the finished goods and services produced within a country's borders in a specific time period.",
  },
  {
    term: "Inflation",
    definition: "A general increase in prices and fall in the purchasing value of money.",
  },
  {
    term: "Exchange Rate",
    definition:
      "The rate at which one currency will be exchanged for another, also known as the foreign exchange rate, forex rate, or FX rate.",
  },
  {
    term: "Purchasing Power Parity (PPP)",
    definition:
      "A theory that states that exchange rates between currencies are in equilibrium when their purchasing power is the same in each of the two countries.",
  },
  {
    term: "Consumer Price Index (CPI)",
    definition:
      "A measure that examines the weighted average of prices of a basket of consumer goods and services, such as transportation, food, and medical care.",
  },
  {
    term: "Economic Index",
    definition:
      "A statistical measure of change in a representative group of individual data points, used to indicate the overall state or trend of an economy.",
  },
  {
    term: "Market Trend",
    definition:
      "The overall direction of a market or an asset's price, typically classified as upward, downward, or sideways.",
  },
  {
    term: "Fiscal Policy",
    definition: "The use of government spending and tax policies to influence economic conditions.",
  },
  {
    term: "Monetary Policy",
    definition:
      "The actions of a central bank, currency board or other regulatory committee that determine the size and rate of growth of the money supply.",
  },
  {
    term: "Economic Indicator",
    definition:
      "A piece of economic data, usually of macroeconomic scale, that is used by analysts to interpret current or future investment possibilities.",
  },
]

export default function GlossaryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Sparkles />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-primary">Economic Glossary</h1>
        <p className="text-xl mb-12 text-muted-foreground">
          A comprehensive guide to key economic terms and concepts used in our indices and analyses.
        </p>
        <div className="grid gap-8">
          {glossaryTerms.map((item, index) => (
            <div key={index} className="bg-card text-card-foreground rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-2 text-primary">{item.term}</h2>
              <p className="text-muted-foreground">{item.definition}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

