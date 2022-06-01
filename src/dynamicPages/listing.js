import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { LocationMarkerIcon } from "@heroicons/react/solid"


import Layout from "../components/layout"
import { InternalLink, ExternalLink } from "../components/gaLink"


let statusOpts = {
  "Lsd": "Leased",
  "Sld": "Sold",
  "Sus": "Suspended",
  "Ter": "Terminated",
  "Exp": "Expired",
  "New": "New"
}

let types = {
  "free": "Freehold",
  "condo": "Condominium",
  "com": "Commercial"
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
  console.log(listing)
  let addr = listing.disp_addr === "Y" ? listing.addr : listing.cross_st;
  let type = types[(listing.class || "").toLowerCase()] || "Unknown"
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
      <div className="flex flex-col py-6">
        {/* <div className="place-items-center tablet:place-content-around tablet:flex-row laptop:flex-col laptop:place-content-start flex flex-col flex-shrink-0 gap-10">
          <GatsbyImage
            image={image}
            alt={`${name}'s Headshot`}
            className=" rounded-b-full"
          />
        </div> */}
        <p className="text-4xl font-light capitalize tabular-nums pb-2">{listing.lp_dol ? listing.lp_dol.toLocaleString('en-US', {style: "currency", currency: "USD", maximumFractionDigits: 0}) : ""}</p>
        <div className="flex place-items-end">
          <span className="w-6 text-secondary-400 -ml-1"><LocationMarkerIcon/></span>
          <p className="capitalize font-light leading-tight">{addr}</p>
        </div>
        <p className="capitalize font-light leading-tight">{listing.municipality}, {listing.county} {listing.country}</p>
        <p className="uppercase font-light leading-tight">{listing.zip}</p>
        <div className="w-full py-[30%] bg-blue-400 relative my-10">
          <p className="absolute top-[50%]">Images go here</p>
        </div>
        <p className="font-light"><span className="font-semibold">Type:</span> {type}</p>
        <p className="font-semibold pt-4">Description:</p>
        <p className="font-light">{listing.ad_text}</p>
        <p className="font-semibold pt-4">Extras:</p>
        <p className="font-light">{listing.extras}</p>
        <div className="mt-3">
          <ExternalLink
            href={`https://onlistings.trreb.ca/listings/TREB-${mlNum}`}
            label="See Full Listing Details on TRREB"
            tag={`${mlNum} > See TRREB Details`}
            className="tertiary-btn"
          >
            See Full Listing Details on TRREB &rarr;
          </ExternalLink>
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
        See All Available Listings &rarr;
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
