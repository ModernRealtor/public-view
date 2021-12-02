import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout(props) {
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
  <div>
      <Helmet>
          <html lang="en" className="min-h-screen" />
          <body className="overflow-hidden scroll tablet:scroll" />
          <meta charSet="utf-8" />
          <title>{data.cms.org.info.name}</title>
      </Helmet>
      <Header />
      {props.children}
      <Footer />
  </div>
  )
}