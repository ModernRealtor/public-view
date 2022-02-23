import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { contactIcons } from "../assets/icons/socials"
import Layout from "../components/layout"

export default function About({location}) {
  let {cms: {org: {info: {name}, contact}}} = useStaticQuery(graphql`
  query {
    cms {
      org {
        info{
          name
        }
        contact {
          cell
          business
          home
          email
          addr
        }
      }
    }
  }
`)
  return (
    <Layout path={location.pathname} title="About Us">
      <span className="outer-layout">
        <div className="h-96 ">
          About {name} 
          <br/>
          Reach us using any of the following:
          {Object.entries(contact)
            .filter(entry => entry[1])
            .map((entry, i) => {
              let Icon = contactIcons[entry[0]].icon
              return <p key={i} className="flex" title={contactIcons[entry[0]].desc}> <Icon className="w-6 pr-2"/> {entry[1]}</p>
          })}
        </div>
      </span>
    </Layout>
  )
}
