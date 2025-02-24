import type { Index } from "@/types/index"
import Image from "next/image"
import Link from "next/link"

export default function IndexCard({ id, name, description, icon }: Index) {
  return (
    <Link href={`/index/${id}`}>
      <div className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary">
        <div className="relative h-40">
          <Image
            src={icon || "/placeholder.svg"}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent"></div>
          <h2 className="absolute bottom-4 left-4 text-xl font-semibold text-primary-foreground">{name}</h2>
        </div>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="mt-4 flex items-center text-accent font-medium">
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}

