import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout({title, children, path, description}) {
    const {site: {siteMetadata: {domain}}, cms: {org: {info: {name}}}} = useStaticQuery(graphql`
    {
      cms {
        org {
          info {
            name
          }
        }
      }
      site {
        siteMetadata {
          domain
        }
      }
    }
  `)
  let url = `${domain}${path}`
  let pageTitle = (title? `${title} | ` : "") + name

  return (
  <div>
      <Helmet>
          <html lang="en"/>
          <body className="bg-secondary-50 text-secondary-800 overflow-hidden scroll tablet:scroll" />
          <meta charSet="utf-8" />
          <title>{pageTitle}</title>
          <link rel="icon" type="image/x-icon" href="/logos/main.svg" />
          <link rel="canonical" href={url} />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:site_name" content={name} />
          <meta property="og:description" content={description || ""} />
          <meta property="og:type" content="website" />
          <meta property="og:image" itemprop="image" content="/logos/main.png" />
      </Helmet>
      <Header />
      {children}
      <Footer path={path} />
  </div>
  )
}