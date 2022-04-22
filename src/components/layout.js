import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout({ title, children, path }) {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
    cms: {
      curOrg: {
        name, description,
      },
    },
  } = useStaticQuery(graphql`
    {
      cms {
        curOrg {
          name
          description
        }
      }
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  let url = `${siteUrl}${path}`
  let pageTitle = (title ? `${title} | ` : "") + name

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <body className="bg-secondary-50 text-secondary-800 scroll tablet:scroll overflow-hidden" />
        <title>{pageTitle}</title>
        <link rel="icon" type="image/x-icon" href="/logos/main.svg" />
        <link rel="canonical" href={url} />
        <meta http-equiv="Content-Type" content="text/html; charSet=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description || ""} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:site_name" content={name} />
        <meta property="og:description" content={description || ""} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          itemprop="image"
          content={`${siteUrl}/logos/main300x300.png`}
        />
      </Helmet>
      <Header />
      {children}
      <Footer path={path} />
    </div>
  )
}
