import type { Index } from "@/types/index"
import Image from "next/image"
import Link from "next/link"

export default function IndexCard({ id, name, description, icon }: Index) {
  return (
    <Link href={`/index/${id}`}>
      <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6 hover:bg-opacity-75 transition-all duration-300 h-full flex flex-col justify-between border border-purple-500 shadow-lg hover:shadow-purple-500/50">
        <div>
          <div className="flex items-center mb-4">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Image
                src={icon || "/placeholder.svg"}
                alt={name}
                width={40}
                height={40}
                className="relative rounded-full"
              />
            </div>
            <h2 className="text-xl font-semibold ml-3">{name}</h2>
          </div>
          <p className="text-gray-300">{description}</p>
        </div>
        <div className="mt-4 text-purple-400 font-medium group">
          Learn more
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            →
          </span>
        </div>
      </div>
    </Link>
  )
}

