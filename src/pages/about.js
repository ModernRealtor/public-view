import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { contactIcons } from "../assets/icons/socials"
import Layout from "../components/layout"

export default function About({location: {pathname}}) {
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
    <Layout path={pathname} description={about || "About the brokerage"} title="About Us">
      <div className="outer-layout py-10 desktop:py-28">
        <h1 className="font-semibold text-4xl pb-4 text-primary-500 ">About Us</h1>
        <div className="pb-2">
          <h2 className="text-2xl text-secondary-400">{name}</h2>
          {tagline ? <h3 className="text-lg py-1 text-secondary-400">{tagline}</h3> : ""}
          {about ? <p className="py-6 whitespace-pre-wrap text-justify">{about}</p> : ""} 
        </div>
        <div className="py-4">
          <h2 className="text-primary-500 font-semibold text-4xl py-4 tablet:pt-12 desktop:pt-20">Contact Us</h2>
          <p className="pb-1">Reach us using any of the following:</p>
          {Object.entries(contact)
            .filter(entry => entry[1])
            .map((entry, i) => {
              let Icon = contactIcons[entry[0]]
              let val = entry[1]
              return <OutboundLink  href={`${Icon.prefix}${val}`} key={i} className="flex w-fit font-medium py-1 max-w-max items-baseline" title={Icon.desc}> <Icon.icon className="w-6 pr-2"/> {val}</OutboundLink >
          })}
          {(contact["addr"]) ? (
            <StaticImage 
              src="../../static/map.png" 
              className="max-w-lg"
              placeholder="blurred" 
              alt="Map showing brokerage location" />
            ) : ""}
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