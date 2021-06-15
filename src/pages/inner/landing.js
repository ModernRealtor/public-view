import React from "react"
import Hero from "../../components/hero"
import Content from "../../components/temp"

export default function LandingPage(props) {
  return (
    <div className="flex flex-col gap-16 mb-5">
      <Hero />
      <Content />
    </div>
  )
}
