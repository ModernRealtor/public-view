import React from "react"
import Icon from "../assets/icons/logo.svg"

export default function Logo(props) {
  return (
    <div className={`${props.className} flex flex-nowrap`}>
      <button className="w-11 h-11">
        <img src={Icon} alt="logo" />
      </button>
      <div className="h-full flex flex-col place-content-center ml-3">
        Logo TxT
      </div>
    </div>
  )
}
