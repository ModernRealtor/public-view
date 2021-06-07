import React from "react"

export default function Logo(props) {
  return (
    <div className={`${props.className} flex flex-nowrap`}>
      <button className="w-11 h-11 bg-orange">Logo</button>
      <div className="h-full flex flex-col place-content-center">Logo TxT</div>
    </div>
  )
}
