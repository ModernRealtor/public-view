import React from "react"
import { HouseSearching } from "../assets/icons/undraw"
import { Link } from "gatsby"

let heroTitle = "Your next home is a click away."
let heroText = "Let us help you find the property of your dreams."

export default function Hero(props) {
  return (
    <div className={`${props.className}  py-16 text-secondary-900 tablet:py-24 laptop:py-32 desktop:py-48`}>
      <div className="flex flex-col tablet:flex-row gap-0 tablet:gap-12 place-items-center">
        <div className="py-5 tablet:pb-10 desktop:pt-0 text-center tablet:text-left desktop:text-right">
          <h1 className="text-primary-500 font-bold py-5 text-4xl capitalize laptop:text-5xl laptop:pb-10 desktop:text-6xl desktop:pb-14 desktop:pt-0">{heroTitle}</h1>
          <p className="py-4">{heroText}</p>
          <Link to="/about/" className=" primary-btn desktop:float-right">Learn More &rarr;</Link>
        </div>
        <HouseSearching className="w-full"/>
      </div>
    </div>
  )
}
