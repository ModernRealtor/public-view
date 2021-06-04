import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import Content from "./inner/landing"

export default function Home() {
  return (
    <div class="max-w-6xl mx-auto">
      <Helmet>
        <html lang="en" class="bg-gray-50 min-h-screen"/>
        <meta charSet="utf-8" />
        <meta name="description" content="public site" />
        <title>West-100</title>
      </Helmet>
      <Header classes="bg-green-100 h-20"/>
      <Content classes="bg-red-100 h-screen"/>
      <Footer classes="bg-blue-100 h-40"/>
    </div>
  )
}
