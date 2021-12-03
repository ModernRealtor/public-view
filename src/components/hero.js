import React from "react"
import Undraw from "react-undraw"

let heroTitle = "Your next home is a click away."
let heroText = "Let us help you find the property of your dreams."

export default function Hero(props) {
  return (
    <div className={`${props.className} pb-10 tablet:pt-10 laptop:py-24 desktop:py-32`}>
      <div className="flex flex-col tablet:flex-row">
        <div className="pt-5 pb-10 desktop:pt-0 text-center tablet:text-left desktop:text-right">
          <h1 className="font-bold py-5 text-4xl capitalize laptop:text-5xl laptop:pb-10 desktop:text-6xl desktop:pb-14 desktop:pt-0">{heroTitle}</h1>
          <p className="pb-4">{heroText}</p>
          <button className="bg-primary text-secondary hover:bg-accent px-4 py-2 desktop:float-right">Get Started</button>
        </div>
        <Undraw name="house_searching" primaryColor="" className="" />
      </div>
    </div>
  )
}
