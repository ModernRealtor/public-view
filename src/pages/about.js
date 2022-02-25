import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { contactIcons } from "../assets/icons/socials"
import Layout from "../components/layout"

export default function About({location}) {
  let {cms: {org: {info: {about, tagline}, contact, team: {edges}}}} = useStaticQuery(graphql`
  query {
    cms {
      org {
        info {
          about
          tagline
        }
        contact {
          cell
          business
          home
          email
          addr
        }
        team(all: true) {
          edges {
            node {
              id
              info {
                name
                imageUrl
                staffInfo {
                  title
                  displayOnPv
                }
              }
            }
          }
        }
      }
    }
  }
`)
  let teamMembers = edges
  .filter(({node: {info: {staffInfo}}}) => staffInfo.displayOnPv)
  .map(({node: {id, info: {name, imageUrl, staffInfo: {title}}}}) => ({id, name, title, imageUrl}))
  return (
    <Layout path={location.pathname} title="About Us">
      <div className="outer-layout">
        <h1 className="font-semibold text-4xl pt-8">About Us</h1>
        <div className="pb-6">{about || ""} {tagline || ""}</div>
        <div className="py-10">
          <h2 className="font-semibold text-3xl">Contact Us</h2>
          Reach us using any of the following:
          {Object.entries(contact)
            .filter(entry => entry[1])
            .map((entry, i) => {
              let Icon = contactIcons[entry[0]].icon
              return <p key={i} className="flex" title={contactIcons[entry[0]].desc}> <Icon className="w-6 pr-2"/> {entry[1]}</p>
          })}
        </div>
        <div className="py-10">
          <h2 className="font-semibold text-3xl pb-10">Our Team</h2>
          <ul className="flex gap-10">
            {teamMembers.map(({id, title, name, imageUrl}) => (
              <li key={id}>
                <Link to={`/team/${id}`}> 
                  <div className="flex flex-col">
                    <img src={imageUrl} alt={`${name}'s Headshot`} className="object-cover object-top w-32 h-32 rounded-full"/>
                    <p>{name}</p>
                    <p>{title}</p>
                  </div>
                </Link>
              </li>
              ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
