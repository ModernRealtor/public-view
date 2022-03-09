import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { contactIcons } from "../assets/icons/socials"

export default function TeamMember({pageContext, data, location: {origin, pathname}}) {
  let { info: {name, staffInfo: {title, about}}, contact} = pageContext
  let image = getImage(data.file)
  return (
    <Layout title={name} origin={origin} path={pathname} description={about || `About ${name}`}>
      <span id="ogImage"></span>
      <div className="outer-layout py-10 tablet:py-16 laptop:py-20">
        <h2 className="text-primary-500 font-semibold text-4xl py-8">{name}</h2>
        <div className="py-8 flex gap-16 flex-col laptop:flex-row laptop:gap-24 desktop:gap-28">
          <div className="flex-shrink-0 flex flex-col gap-10 place-items-center tablet:place-content-around tablet:flex-row laptop:flex-col laptop:place-content-start">
            <GatsbyImage 
              image={image} 
              alt={`${name}'s Headshot`} 
              className="rounded-b-full "
            />
            <div>
              {Object.entries(contact)
                .filter(entry => entry[1])
                .map((entry, i) => {
                  let Icon = contactIcons[entry[0]]
                  let val = entry[1]
                  return <a href={`${Icon.prefix}${val}`} key={i} className="flex w-max font-medium py-1" title={Icon.desc}> <Icon.icon className="w-6 pr-2"/> {val}</a>
                })}
            </div>
          </div>
          
          <div className="flex flex-col py-8 gap-6 laptop:gap-12">
            <div><h3 className="font-medium text-lg">{title}</h3></div>
            <div className="whitespace-pre-wrap text-justify">{about}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query TeamImage($id: String) {
    file(name: {eq: $id}) {
      childImageSharp {
          gatsbyImageData(
              placeholder: BLURRED
              width: 300
          )
      }
    }
  }
`