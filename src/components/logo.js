import React from "react"
import Icon from "../assets/icons/logo.svg"

export default function Logo(props) {
  return (
    <div className={`${props.className} flex flex-nowrap`}>
      <button className="w-11 h-11">
        <img src={Icon} alt="logo" />
      </button>
      <div className="h-full flex flex-row flex-wrap place-content-center ml-1">
        <span className="text-lg font-bold">West-100</span>
        <span className="hidden text-sm leading-loose ml-3 tablet:inline-block">
          Capital Reality Inc., Brokerage
        </span>
      </div>
    </div>
  )
}
