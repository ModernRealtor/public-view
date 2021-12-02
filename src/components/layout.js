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
  let nameTitleCase = data.cms.org.info.name.charAt(0).toUpperCase() + data.cms.org.info.name.substring(1)
  let title = (props.title? `${props.title} - ` : "") + nameTitleCase
  return (
  <div>
      <Helmet>
          <html lang="en"/>
          <body className="bg-secondary overflow-hidden scroll tablet:scroll" />
          <meta charSet="utf-8" />
          <title>{title}</title>
      </Helmet>
      <Header />
      {props.children}
      <Footer path={props.path || null} />
  </div>
  )
}