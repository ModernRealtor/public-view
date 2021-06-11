import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function HeroImage(props) {
  const attrs = {
    src: "../assets/images/hero.jpg",
    alt: "Hero Image",
    layout: "fullWidth",
    placeholder: "blurred",
    transformOptions: {
      cropFocus: "center",
    },
    className: "filter brightness-95",
  }
  return (
    <>
      <span className="block tablet:hidden">
        <StaticImage aspectRatio={1} {...attrs} />
      </span>
      <span className="hidden tablet:block">
        <StaticImage aspectRatio={16 / 9} {...attrs} />
      </span>
    </>
  )
}

function HeroText(props) {
  return (
    <div className="z-10 w-full aspect-w-1 aspect-h-1 tablet:aspect-w-16 tablet:aspect-h-9 !absolute bg-indigo-100 bg-opacity-50">
      <div className="flex flex-col p-10 tablet:gap-5 laptop:flex-row">
        <h1 className="flex-grow block text-4xl tablet:text-5xl tablet:gap-16 capitalize font-black text-white filter drop-shadow flex flex-col justify-around bg-green-100 bg-opacity-50">
          <span className="border border-black">Your next</span>
          <span className="border border-black">home</span>
          <span className="flex flex-col relative ">
            <span className="border border-black">is a</span>
            <span className="border border-black">click away.</span>
          </span>
        </h1>
        <div className="self-end tablet:absolute tablet:bottom-10 laptop:static laptop:flex-grow">
          <button className="px-5 py-3 bg-white ">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default function Hero(props) {
  return (
    <span className="relative">
      <HeroText />
      <HeroImage />
    </span>
  )
}
