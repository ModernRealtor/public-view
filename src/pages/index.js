import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-16 mb-5">
        <Hero />
        <div className="h-48 mx-5 border border-yellow-700">
          What we do/Value Proposition <br />
          Our Services (solutions: buy/sell/etc) <br />
          Testimonials <br />
        </div>
      </div>
    </Layout>
  )
}
