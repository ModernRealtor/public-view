import React, {useState} from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import {PlayIcon, ArrowCircleLeftIcon, ArrowCircleRightIcon} from "@heroicons/react/solid"

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

let ImageCarousel = ({imageData}) => {
  let [imgIdx, setImgIdx] = useState(0)
  return(
  <div className="w-full h-auto laptop:row-span-2 desktop:row-span-3 flex flex-col">
    <div className="relative aspect-[3/2] bg-zinc-200 w-full flex justify-center">
      <GatsbyImage
        image={imageData[imgIdx].image}
        alt={`Listing image #${imgIdx+1}`}
        className={`h-full w-auto aspect-auto object-cover`}
      />
      <div className={`absolute text-secondary-50 text-xs bottom-0 left-0 w-full h-fit px-4 pb-2 pt-12 hover:opacity-80 active:opacity-80 opacity-0 transition-opacity bg-gradient-to-t from-zinc-900 via-zinc-600 to-transparent`}>
        <p>{imageData[imgIdx].comment || ""}</p>
        <p className="font-thin py-1.5">
        Last Updated: {(new Date(imageData[imgIdx].updatedAt)).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
    <div className="w-full  flex flex-col gap-0.5 grow">
      <div className="flex w-full justify-evenly my-0.5 h-6">
        <button
          aria-label="Previous Image"
          title="Previous Image"
          onClick={()=> setImgIdx(imgIdx-1)}
          disabled={imgIdx===0}
          className={`${imgIdx===0 ? "text-secondary-500" : "text-secondary-900"} w-6`}
        >
          <ArrowCircleLeftIcon/>
        </button>
        <div className="text-sm">{imgIdx+1} / {imageData.length}</div>
        <button
          aria-label="Next Image"
          title="Next Image"
          onClick={()=> setImgIdx(imgIdx+1)}
          disabled={imgIdx===imageData.length-1}
          className={`${imgIdx===imageData.length-1 ? "text-secondary-500" : "text-secondary-900"} w-6`}
        >
          <ArrowCircleRightIcon/>
        </button>
      </div>

      <div className="thumbnail-container w-full h-14 flex gap-2">
        <div className="img-thumbnails h-full w-full  overflow-x-scroll flex flex-nowrap gap-1">
          {imageData.map(({image}, idx) => (
            <button
              key={idx}
              className="h-14 aspect-square"
              aria-label={`Listing image #${idx+1}`}
              onClick={() => setImgIdx(idx)}
            >
              <GatsbyImage
                image={image}
                alt={`Listing image #${idx+1}`}
                className={`h-full w-auto aspect-auto object-cover rounded-sm ${(imgIdx === idx)? "opacity-100 shadow" : "opacity-60 shadow-sm"} hover:opacity-100 transition-opacity`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
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
  let images = {};
  (listing?.images || []).forEach(({imgNum, comment, updatedAt}) => {
    images[imgNum] = {comment, updatedAt}
  })
  let imageData = data.allFile?.nodes.map(img => ({
    image: getImage(img),
    ...(images[Number(img.name)]) // Add comment and timestamp
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
        <div className="my-2 grid grid-cols-1 laptop:grid-cols-2 gap-x-8 gap-y-2">
          <div className="w-full mb-4 flex justify-between">
            <div className="w-fit">
              <p className="text-4xl font-light capitalize tabular-nums pb-2">{listing.lp_dol ? listing.lp_dol.toLocaleString('en-US', {style: "currency", currency: "USD", maximumFractionDigits: 0}) : ""}</p>
              <p className="capitalize font-light leading-tight">{addr}</p>
              <p className="capitalize font-light leading-tight">{listing.municipality}, {listing.county} {listing.country}</p>
              <p className="uppercase font-light leading-tight">{listing.zip}</p>
            </div>
            {listing.tour_url? (
              <ExternalLink
                href={listing.tour_url}
                label="See Video Tour"
                tag={`${mlNum} > Video Tour`}
                className="secondary-btn h-fit w-max my-0 px-3.5 flex flex-nowrap items-center gap-2 self-end"
              >
                <PlayIcon className="w-6"/>
                <span className="leading-none h-min pb-0.5">Video Tour</span>
              </ExternalLink>
            ) : <></>}
          </div>
          <ImageCarousel imageData={imageData} videoUrl={listing.tour_url || null} />
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
