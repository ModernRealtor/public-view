import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import Content from "./inner/landing"

export default function Home() {
  return (
    <div>
      <Helmet>
        <html lang="en" class="bg-gray-50"/>
        <meta charSet="utf-8" />
        <meta name="description" content="public site" />
        <title>West-100</title>
      </Helmet>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}
