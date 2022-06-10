import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import {GetListings, ListingCarousel} from "../components/availableListings"
import Layout from "../components/layout"
import { contactIcons } from "../assets/icons/socials"

export default function TeamMember({
  pageContext,
  data,
  location: { pathname },
}) {
  let {
    staff: {
      title,
      about,
      listings,
      user: {
        name,
        contact
      },
    }
  } = pageContext
  let image = getImage(data.file)
  let Listings = GetListings(listings)
  return (
    <Layout title={name} path={pathname}>
      <div className="outer-layout tablet:py-16 laptop:py-20 py-10">
        <h2 className="text-primary-500 py-8 text-4xl font-semibold">{name}</h2>
        <div className="laptop:flex-row laptop:gap-24 desktop:gap-28 flex flex-col gap-16 py-8">
          <div className="place-items-center tablet:place-content-around tablet:flex-row laptop:flex-col laptop:place-content-start flex flex-col flex-shrink-0 gap-10">
            <GatsbyImage
              image={image}
              alt={`${name}'s Headshot`}
              className=" rounded-b-full"
            />
            <div>
              {Object.entries(contact)
                .filter(entry => entry[1])
                .map((entry, i) => {
                  let Icon = contactIcons[entry[0]]
                  let val = entry[1]
                  return (
                    <OutboundLink
                      href={`${Icon.prefix|| ""}${val}`}
                      key={i}
                      className="w-max flex py-1 font-medium"
                      title={Icon.desc}
                    >
                      {" "}
                      <Icon.icon className="w-6 pr-2" /> {Icon.display? Icon.display(val) : val}
                    </OutboundLink>
                  )
                })}
            </div>
          </div>

          <div className="laptop:gap-12 flex flex-col gap-6 py-8">
            <div>
              <h3 className="text-lg font-medium">{title}</h3>
            </div>
            <div className="text-justify whitespace-pre-wrap">{about}</div>
          </div>
        </div>
        <ListingCarousel subListings={Listings} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query TeamImage($fname: String) {
    file(name: { eq: $fname }, sourceInstanceName: {eq: "teamImages"}) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, width: 300)
      }
    }
  }
`
