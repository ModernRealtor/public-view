import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout({title, children, path, origin, description}) {
    const {cms: {org: {info: {name}}}} = useStaticQuery(graphql`
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
  let url = `${origin}${path}`
  let pageTitle = (title? `${title} | ` : "") + name
  let logoPath = "/logos/main.svg"
  return (
  <div>
      <Helmet>
          <html lang="en"/>
          <body className="bg-secondary-50 text-secondary-800 overflow-hidden scroll tablet:scroll" />
          <meta charSet="utf-8" />
          <title>{pageTitle}</title>
          <link rel="icon" type="image/x-icon" href={logoPath} />
          <link rel="canonical" href={url} />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:site_name" content={name} />
          <meta property="og:description" content={description || ""} />
      </Helmet>
      <Header />
      {children}
      <Footer path={path} />
  </div>
  )
}