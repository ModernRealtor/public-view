import React from "react"
import LogoIcon from "../assets/icons/logo"

export default function Logo(props) {
  return (
    <div className={`${props.className} flex flex-nowrap`}>
      <button className="w-11 h-11">
        <LogoIcon />
      </button>
      <div className="place-content-center flex flex-row flex-wrap justify-start h-full ml-1">
        <span className="tablet:mr-3 text-lg font-bold">West-100</span>
        <span className="tablet:inline-block hidden text-sm leading-loose">
          Capital Reality Inc., Brokerage
        </span>
      </div>
    </div>
  )
}
