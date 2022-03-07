import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout(props) {
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
  let title = (props.title? `${props.title} | ` : "") + name
  return (
  <div>
      <Helmet>
          <html lang="en"/>
          <body className="bg-secondary-50 text-secondary-800 overflow-hidden scroll tablet:scroll" />
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="icon" type="image/x-icon" href="logos/main.svg" />
      </Helmet>
      <Header />
      {props.children}
      <Footer path={props.path || null} />
  </div>
  )
}