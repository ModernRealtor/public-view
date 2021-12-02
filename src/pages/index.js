import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-16 mb-5 outer-layout bg-secondary text-primary">
        <Hero />
        <div className="h-48">
          What we do/Value Proposition <br />
          Our Services (solutions: buy/sell/etc) <br />
          Testimonials
        </div>
      </div>
    </Layout>
  )
}
