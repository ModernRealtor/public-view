import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"

export default function Home() {
  return (
    <Layout>
        <Hero className="outer-layout bg-secondary text-primary"/>
        <div className="h-96 outer-layout bg-primary text-secondary">
          <p>What we do/Value Proposition</p>
          <p>Our Services (solutions: buy/sell/etc)</p>
        </div>
        <div className="h-48 outer-layout bg-secondary text-primary">
          <p>Testimonials</p>
        </div>
    </Layout>
  )
}
