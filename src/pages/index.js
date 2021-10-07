import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Content from "./inner/landing"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="max-w-6xl mx-auto bg-white shadow">
      <Helmet>
        <html lang="en" className="bg-texture min-h-screen bg-gray-100" />
        <body className="scroll tablet:scroll overflow-hidden" />
        <meta charSet="utf-8" />
        <meta name="description" content={data.site.siteMetadata.description} />
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
