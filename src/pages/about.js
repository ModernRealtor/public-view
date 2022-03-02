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
                  aspectRatio: 1
                  width: 200
                  transformOptions: {cropFocus: NORTH}
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
      <div className="outer-layout py-20 desktop:py-28">
        <h1 className="font-semibold text-4xl py-4 text-primary-500 ">About Us</h1>
        <div className="pb-2">
          <h2 className="text-2xl text-secondary-400">{name}</h2>
          {tagline ? <h3 className="text-lg py-1 text-secondary-400">{tagline}</h3> : ""}
          {about ? <p className="py-6 whitespace-pre-wrap text-justify">{about}</p> : ""} 
        </div>
        <div className="py-4">
          <h2 className="text-primary-500 font-semibold text-4xl py-4 tablet:pt-12 desktop:pt-20">Contact Us</h2>
          Reach us using any of the following:
          {Object.entries(contact)
            .filter(entry => entry[1])
            .map((entry, i) => {
              let Icon = contactIcons[entry[0]].icon
              return <p key={i} className="flex" title={contactIcons[entry[0]].desc}> <Icon className="w-6 pr-2"/> {entry[1]}</p>
          })}
        </div>
        <div className="py-10">
          <h2 className="text-primary-500 font-semibold text-4xl py-8 pb-10 tablet:pt-16 desktop:pt-20">Our Team</h2>
          <ul className="flex gap-10 flex-wrap content-around justify-evenly laptop:justify-start">
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
      <div className="flex flex-col place-items-center text-center">
        <GatsbyImage 
          image={image} 
          alt={`${name}'s Headshot`} 
          className="rounded-b-full"
        />
        <p className="font-bold">{name}</p>
        <p className="font-medium">{title}</p>
      </div>
    </Link>
  </li>
}