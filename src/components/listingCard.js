import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { LocationMarkerIcon, ArrowsExpandIcon } from "@heroicons/react/solid"

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

export function ListingCard(props) {
  let image = getImage(props.image)
  return (
    <div className="h-72 text-primary w-64 text-xs">
      <div className="h-3/5 bg-gradient-to-t from-secondary to-primary  w-full rounded-t-sm">
        <GatsbyImage
          image={image}
          alt="Primary listing photo for the listing"
          className="w-full h-full"
        />
      </div>
      <div className="h-2/5 bg-secondary justify-items-stretch flex flex-col w-full gap-3 p-3 rounded-b-sm">
        <div className="font-thin align-middle">
          <LocationMarkerIcon className="h-4 mr-2 -ml-0.5 float-left" />{" "}
          {props.info.address}
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex content-center">
            <BedIcon className="self-center w-4 mr-2" /> {props.info.numBed} bed
          </div>
          <div className="flex">
            <BathIcon className="h-3 mr-2" />
            {props.info.numBath} bath
          </div>
          <div className="flex">
            <ArrowsExpandIcon className="self-center h-4 mr-2" />
            {props.info.size} m <sup className="top-1 relative">2</sup>
          </div>
        </div>
        <div className="flex flex-grow">
          <button className="border-primary hover:border-accent hover:text-accent  w-2/5 text-sm font-normal border-2 rounded">
            Book Now
          </button>
          <p className="self-center w-3/5 text-base font-bold text-center">
            ${props.info.price.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}
