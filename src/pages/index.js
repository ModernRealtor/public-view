import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"

export default function Home() {
  return (
    <Layout>
        <Hero className="outer-layout bg-secondary text-primary"/>
        <div className="h-96 outer-layout bg-primary text-secondary">
          <p>What we do/Value Proposition</p>
          <p>in the meantime can have like, metrics like list of, [number]+ [descriptor]</p>
          <p>for ex: 100+ houses sold, 1000+ offers accepted, 10+ years in business, etc</p>
          <p>in future will also have search bar to search properties in real time</p>
        </div>
        <div className="h-48 outer-layout bg-secondary text-primary">
          <p>Testimonials</p>
          <p>get from server. at first dummu values, but in future will get from google business reviews</p>
        </div>
    </Layout>
  )
}
