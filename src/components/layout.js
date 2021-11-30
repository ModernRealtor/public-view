import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout({ children }) {
    const data = useStaticQuery(graphql`
    query {
      cms {
        org {
          info {
            name
          }
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
            <title>{data.cms.org.info.name}</title>
        </Helmet>
        <Header />
            {children}
        <Footer />
    </div>
    )
}