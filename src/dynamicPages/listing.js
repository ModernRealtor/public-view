import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { InternalLink } from "../components/gaLink"

let statusOpts = {
  "Lsd": "Leased",
  "Sld": "Sold",
  "Sus": "Suspended",
  "Ter": "Terminated",
  "Exp": "Expired",
  "New": "New"
}

let Template = ({mlNum, lsc, lud, children, pathname, title}) => {
  return (
    <Layout title={`Listing ${mlNum}`} path={pathname}>
      <div className="outer-layout py-8">
        <h1 className="py-2 text-xs uppercase">&#8212; MLS Number: {mlNum}</h1>
        <h2 className="pt-4 text-4xl font-extrabold text-primary-500 capitalize">{title}</h2>
        <h2 className="py-2 text-sm font-thin"><span className="font-semibold">{statusOpts[lsc] || "Updated"}</span> as of {(new Date(lud)).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
        {children}
      </div>
    </Layout>
  )
}

export default function Listing({
  pageContext,
  data,
  location: { pathname },
}) {
  let {listing, mlNum} = pageContext
  // console.log(data.allFile)
  let images = data.allFile?.nodes.map(img => getImage(img))
  return (<Template 
    mlNum={mlNum}
    pathname={pathname} 
    title={listing.status === "U"? "Listing is no longer available" : (listing["s_r"]? `For ${listing["s_r"]}` : "Listing is Available")}
    lsc={listing.lsc}
    lud={listing.lud}
  >
    {listing.status === "U" ? <></> : (
      <div className="laptop:flex-row laptop:gap-24 desktop:gap-28 flex flex-col gap-16 py-8">
        {/* <div className="place-items-center tablet:place-content-around tablet:flex-row laptop:flex-col laptop:place-content-start flex flex-col flex-shrink-0 gap-10">
          <GatsbyImage
            image={image}
            alt={`${name}'s Headshot`}
            className=" rounded-b-full"
          />
        </div> */}

        <div className="w-full py-[40%] bg-blue-400 relative">
          <p className="absolute top-[50%]">Images go here</p>
        </div>
      </div>
    )}
    <div className="mt-32">
      <InternalLink
        to="/listings/"
        label="See Available Listings"
        tag={`${mlNum} > See Avail Listings`}
        className="secondary-btn text-center"
      >
        See Available Listings &rarr;
      </InternalLink>
    </div>
    </Template>
  )
}

export const query = graphql`
  query ListingImages($mlNum: String) {
    allFile(filter: {dir: { eq: $mlNum }, sourceInstanceName: {eq: "listingImages"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`
