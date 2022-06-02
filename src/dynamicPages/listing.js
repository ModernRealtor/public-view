import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import { InternalLink, ExternalLink } from "../components/gaLink"
import ListingInquiry from "../components/listingInquiry"


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
        <h2 className="py-2 text-4xl font-extrabold text-primary-500 capitalize">{title}</h2>
        <h2 className="pb-6 text-sm font-thin"><span className="font-semibold">{statusOpts[lsc] || "Updated"}</span> as of {(new Date(lud)).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
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
  let addr = listing.disp_addr === "Y" ? listing.addr : listing.cross_st;
  let type = types[(listing.class || "").toLowerCase()] || "Unknown"
  let images = data.allFile?.nodes.map(img => ({
    image: getImage(img),
    imageNum: Number(img.name)
  }))
  let staffImg = getImage(data.file)
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
        <div className="my-2 grid grid-cols-1 laptop:grid-cols-2 gap-x-8 gap-y-2">
          <div className="w-full mb-4">
            <p className="text-4xl font-light capitalize tabular-nums pb-2">{listing.lp_dol ? listing.lp_dol.toLocaleString('en-US', {style: "currency", currency: "USD", maximumFractionDigits: 0}) : ""}</p>
            <p className="capitalize font-light leading-tight">{addr}</p>
            <p className="capitalize font-light leading-tight">{listing.municipality}, {listing.county} {listing.country}</p>
            <p className="uppercase font-light leading-tight">{listing.zip}</p>
          </div>
          <div className="w-full aspect-[4/3] bg-blue-400 relative laptop:row-span-2 desktop:row-span-3">
            <p className="absolute top-[50%]">Images go here</p>
          </div>
          <div className="w-full">
            <p className="font-light"><span className="font-semibold">Type:</span> {type}</p>
            <p className="font-semibold pt-4">Description:</p>
            <p className="font-light">{listing.ad_text}</p>
          </div>
          <div className="w-full laptop:col-span-2 desktop:col-span-1">
            <p className="font-semibold">Extras:</p>
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
        </div>
        {listing.agent?.displayOnPv ? (
          <div className="w-full flex mt-20 tablet:gap-x-4">
            <GatsbyImage
              image={staffImg}
              alt="Listing Agent's Headshot"
              className="w-1/2 h-fit rounded-full tablet:w-64"
            />
            <div className="flex flex-col place-content-end w-full">
              <div className="flex flex-col pb-6">
                <p className="font-semibold">{listing.agent.user.name}</p>
                <p className="italic">{listing.agent.title}</p>
              </div>
              <InternalLink
                to={`/team/${listing.agent.user.name.replace(/\s+/g, "")}`}
                label="About the listing agent"
                tag={`${mlNum} > About listing agent`}
                className="secondary-btn w-fit text-sm py-1 px-3"
              >
                About this agent
              </InternalLink>
              <ListingInquiry mlNum={mlNum} addr={`${addr} ${listing.municipality}, ${listing.county} ${listing.country}`}/>
            </div>
          </div>
        ) : <></>}

      </div>
    )}
    <div className="mt-28">
      <InternalLink
        to="/listings/"
        label="See Available Listings"
        tag={`${mlNum} > See Avail Listings`}
        className="secondary-btn text-center"
      >
        See All Available Listings
      </InternalLink>
    </div>
    </Template>
  )
}

export const query = graphql`
  query ListingImages($mlNum: String, $staffId: String) {
    allFile(filter: {relativeDirectory: { eq: $mlNum }, sourceInstanceName: {eq: "listingImages"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
    file(name: { eq: $staffId }, sourceInstanceName: {eq: "teamImages"}) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, width: 300, height:300)
      }
    }
  }
`
