import Sparkles from "@/components/Sparkles"

const methodologies = [
  {
    name: "Data Collection",
    description:
      "We collect data from various reliable sources, including government databases, international organizations, and reputable financial institutions. Our team ensures that the data is up-to-date and accurately represents current economic conditions.",
  },
  {
    name: "Index Calculation",
    description:
      "Each index is calculated using a specific formula that takes into account relevant economic factors. These formulas are designed to provide a clear and accurate representation of the economic aspect being measured.",
  },
  {
    name: "Normalization",
    description:
      "To ensure comparability across different countries and regions, we normalize our data using statistical methods. This process accounts for differences in population size, currency values, and other relevant factors.",
  },
  {
    name: "Weighting",
    description:
      "In indices that combine multiple factors, we apply carefully considered weights to each component. These weights are determined based on the relative importance of each factor in representing the overall economic concept.",
  },
  {
    name: "Validation and Quality Control",
    description:
      "Our team of economists and data scientists rigorously validate all calculations and results. We employ various statistical tests and cross-referencing methods to ensure the accuracy and reliability of our indices.",
  },
  {
    name: "Regular Updates",
    description:
      "Economic conditions are constantly changing. We update our indices regularly to reflect the most current economic realities, allowing for timely and relevant insights.",
  },
  {
    name: "Transparency",
    description:
      "We believe in full transparency of our methodologies. Detailed explanations of the calculations and data sources for each index are available upon request, allowing for peer review and validation.",
  },
]

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Sparkles />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-primary">Our Methodology</h1>
        <p className="text-xl mb-12 text-muted-foreground">
          Learn about the rigorous processes and methods we use to create our economic indices.
        </p>
        <div className="grid gap-8">
          {methodologies.map((item, index) => (
            <div key={index} className="bg-card text-card-foreground rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-2 text-primary">{item.name}</h2>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

