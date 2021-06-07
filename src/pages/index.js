import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import Content from "./inner/landing"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <Helmet>
        <html lang="en" className="bg-gray-50 min-h-screen" />
        <meta charSet="utf-8" />
        <meta name="description" content="public site" />
        <title>West-100</title>
      </Helmet>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
