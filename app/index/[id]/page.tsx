import { indices } from "@/data/indices"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function IndexPage({ params }: { params: { id: string } }) {
  const index = indices.find((i) => i.id === params.id)

  if (!index) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-purple-400 hover:text-purple-300 mb-6 inline-block">
          ← Back to all indices
        </Link>
        <div className="bg-gray-800 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <Image src={index.icon || "/placeholder.svg"} alt={index.name} width={60} height={60} className="mr-4" />
            <h1 className="text-3xl font-bold">{index.name}</h1>
          </div>
          <p className="text-xl text-gray-300 mb-8">{index.description}</p>
          <div className="bg-gray-700 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">How it works</h2>
            <p className="text-gray-300">
              The {index.name} is an informal way of measuring the purchasing power parity (PPP) between two currencies.
              It compares the cost of {index.name.split(" ")[0]} products in different countries. This comparison can
              provide insights into whether a currency is over or undervalued.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

