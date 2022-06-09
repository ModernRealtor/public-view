import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { LocationMarkerIcon, ArrowsExpandIcon } from "@heroicons/react/solid"

import { InternalLink } from "./gaLink"

export function BedIcon(props) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 122.88 78.63"
      style={{ enableBackground: "new 0 0 122.88 78.63" }}
      className={props.className}
      fill="currentColor"
    >
      <g>
        <path
          style={{ fillRule: "evenodd", clipRule: "evenodd" }}
          d="M3.36,0h7.3c1.85,0,3.36,1.56,3.36,3.36v43.77h37.33L61.99,9.69h41.85c10.47,0,19.04,8.59,19.04,19.04v19.04 h-0.02c0.01,0.12,0.02,0.24,0.02,0.37v30.49h-14.02V64.32H14.02v13.66H0V3.36C0,1.51,1.51,0,3.36,0L3.36,0z M35.44,10.37 c8.62,0,15.61,6.99,15.61,15.61c0,8.62-6.99,15.61-15.61,15.61c-8.62,0-15.61-6.99-15.61-15.61 C19.83,17.36,26.82,10.37,35.44,10.37L35.44,10.37z"
        />
      </g>
    </svg>
  )
}

export function BathIcon(props) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 89.19 122.88"
      style={{ enableBackground: "new 0 0 89.19 122.88" }}
      className={props.className}
      fill="currentColor"
    >
      <g>
        <path
          style={{ fillRule: "evenodd", clipRule: "evenodd" }}
          d="M10.37,84.59C4.17,79.12,0.46,71.46,0,60.91h89.19c-0.33,9.94-2.94,17.23-8.18,21.45 c-5.25,4.23-14.02,4.67-20.88,7.81c-1.49,0.68-2.87,1.52-4.12,2.56c-7.58,6.3-5.38,15.5,1.61,21.31v8.84H10.6v-15.91H2.71V94.84 h7.66V84.59L10.37,84.59z M0.03,54.56V0c6.73,0,13.47,0,20.2,0l6.95,54.56H0.03L0.03,54.56z M31.38,48.73h57.71v5.83H31.38V48.73 L31.38,48.73z"
        />
      </g>
    </svg>
  )
}

export default function ListingCard({img, numBath, numBed, sqft, addr, price, status, mlNum}) {
  let image = getImage(img)
  return (
    <div className="h-72 text-secondary-700 w-64 text-xs bg-gradient-to-b from-zinc-200 to-secondary-50 overflow-hidden rounded-t hover:shadow transition-shadow">
      <InternalLink
        label="See more details"
        tag={`Available Listings > ${mlNum} Details`}
        to={`/listing/${mlNum}/`}
        className="w-full h-full hover:text-secondary-700"
      >
        <div className="h-3/5 w-full relative">
          {img? (
          <GatsbyImage
            image={image}
            alt="Primary photo for the listing"
            className="w-full h-full"
          />
          ) : (
          <div className="w-full h-full bg-gray-300 flex place-items-center place-content-center"> 
            <span className="block">
              No Image Available
            </span>
          </div>)}
          <div className={`absolute top-0 right-0 px-2 py-1 bg-rose-500 text-secondary-50 text-xs font-bold rounded opacity-90 mt-2 mr-2 ${status==="New"? "" : "hidden"}`}>New</div>
        </div>
        <div className="h-2/5 bg-secondary justify-items-stretch flex flex-col w-full gap-3 p-3 rounded-b-sm">
          <div className="flex flex-col gap-0.5">
            <span className="w-full font-extrabold text-base">{price}</span>
            <span className="font-thin align-middle">
              <LocationMarkerIcon className="h-4 mr-2 -ml-0.5 float-left" />{" "}
              {addr}
            </span>
          </div>
          <div className="flex justify-between gap-x-4 gap-y-0  flex-wrap">
            <div className={`flex content-center ${numBed? "" : "hidden"}`}>
              <BedIcon className="self-center w-4 mr-2" /> {numBed} bed
            </div>
            <div className={`flex ${numBath? "" : "hidden"}`}>
              <BathIcon className="h-3 mr-2" />
              {numBath} bath
            </div>
            <div className={`flex ${sqft? "" : "hidden"}`}>
              <ArrowsExpandIcon className="self-center h-4 mr-2" />
              {sqft} ft <sup className="top-1 relative">2</sup>
            </div>
          </div>
        </div>
      </InternalLink>
    </div>
  )
}
