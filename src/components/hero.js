import React from "react"

let heroText = "Your next home is a click away."


export default function Hero(props) {
  return (
    <div className={`${props.className}`}>
      <h1 className="font-black text-4xl capitalize h-48">
        {heroText}
      </h1>
    </div>
  )
}
