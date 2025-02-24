import Sparkles from "@/components/Sparkles";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Sparkles />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-primary">
          About Economic Pulse
        </h1>
        <div className="prose prose-lg dark:prose-invert">
          <p>
            Economic Pulse is a cutting-edge platform dedicated to tracking and
            analyzing global economic trends through innovative indices. Our
            mission is to provide clear, actionable insights into the
            world&apos;s economies, making complex data accessible to everyone
            from seasoned economists to curious individuals.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary">
            Our Approach
          </h2>
          <p>
            We believe that understanding economic trends shouldn&apos;t be
            limited to experts. That&apos;s why we&apos;ve developed a range of
            unique indices that offer intuitive ways to gauge economic health
            and consumer behavior across different countries and regions.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary">
            Our Indices
          </h2>
          <p>
            From the KFC Index to the Netflix Index, our diverse range of
            economic indicators provides insights into various aspects of global
            economies. Each index is carefully crafted to offer a unique
            perspective on economic trends, purchasing power, and consumer
            habits.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary">
            Our Team
          </h2>
          <p>
            Economic Pulse is powered by a team of passionate economists, data
            scientists, and developers. We&apos;re committed to delivering
            accurate, up-to-date information and continually expanding our suite
            of economic tools and insights.
          </p>
        </div>
      </main>
    </div>
  );
}
