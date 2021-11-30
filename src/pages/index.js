import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Content from "../components/temp"

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-16 mb-5">
        <Hero />
        <Content />
      </div>
    </Layout>
  )
}
