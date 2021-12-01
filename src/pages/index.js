import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-16 mb-5 outer-layout">
        <Hero />
        <div className="h-48 bg-gray-700">
          What we do/Value Proposition <br />
          Our Services (solutions: buy/sell/etc) <br />
          Testimonials <br />
          <p className="text-primary">primary</p>
          <p className="text-secondary">secondary</p>
          <p className="text-accent">accent</p>
          <p className="text-dark">dark</p>
          <p className="text-light">light</p>
        </div>
      </div>
    </Layout>
  )
}
