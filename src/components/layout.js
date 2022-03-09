import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbySeo } from 'gatsby-plugin-next-seo'

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

  return (
  <div>
      <Helmet>
          <html lang="en"/>
          <body className="bg-secondary-50 text-secondary-800 overflow-hidden scroll tablet:scroll" />
          <meta charSet="utf-8" />
          <title>{pageTitle}</title>
          <link rel="icon" type="image/x-icon" href="/logos/main.svg" />
      </Helmet>
      <GatsbySeo
        title={pageTitle}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title: pageTitle,
          description,
          images: [
            {
              url: `${origin}/logos/main.png`,
              width: 1200,
              height: 627,
            }],
          site_name: name,
        }}
      />
      <Header />
      {children}
      <Footer path={path} />
  </div>
  )
}