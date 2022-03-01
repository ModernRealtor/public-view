import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { contactIcons } from "../assets/icons/socials"
import Layout from "../components/layout"

export default function About({location}) {
  let {allFile, cms: {org: {info: {name, about, tagline}, contact, team: {edges}}}} = useStaticQuery(graphql`
  query {
    cms {
      org {
        info {
          name
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
    allFile(filter: {sourceInstanceName: {eq:"teamImages"}}) {
      nodes {
          name
          childImageSharp {
              gatsbyImageData(
                  placeholder: BLURRED
              )
          }
      }
  }
}`)
  let teamMembers = edges
  .filter(({node: {info: {staffInfo}}}) => staffInfo.displayOnPv)
  .map(({node: {id, info: {name, staffInfo: {title}}}}) => ({id, name, title}))
  
  let teamImages = {}
  allFile?.nodes?.forEach(imgNode => {
      teamImages[imgNode.name] = imgNode
  })
  
  return (
    <Layout path={location.pathname} title="About Us">
      <div className="outer-layout">
        <h1 className="font-semibold text-4xl py-4">About Us</h1>
        <div className="pb-2">
          <h2 className="text-2xl">{name}</h2>
          {tagline ? <h3 className="text-lg py-1">{tagline}</h3> : ""}
          {about ? <p className="py-6">{about}</p> : ""} 
        </div>
        <div className="py-4">
          <h2 className="font-semibold text-3xl pb-4">Contact Us</h2>
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
            {teamMembers.map(({id, title, name}) => {
              return <TeamIcon key={id} title={title} name={name} imgNode={teamImages[id]} />
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

function TeamIcon({title, name, imgNode}){
  let image = getImage(imgNode)
  let slug = name.replace(/\s+/g, "")
  return <li>
    <Link to={`/team/${slug}`}> 
      <div className="flex flex-col">
        <GatsbyImage image={image} alt={`${name}'s Headshot`} className="object-cover object-top w-32 h-32 rounded-full"/>
        <p>{name}</p>
        <p>{title}</p>
      </div>
    </Link>
  </li>
}