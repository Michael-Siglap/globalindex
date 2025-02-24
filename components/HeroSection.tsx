import DynamicTitle from "@/components/DynamicTitle"

const HeroSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto text-center">
        <DynamicTitle />
        <p className="text-xl text-secondary-foreground mb-8">
          Explore global economic trends with our innovative indices.
        </p>
      </div>
    </section>
  )
}

export default HeroSection

