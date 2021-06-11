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
    <div className="z-10 w-full aspect-w-1 aspect-h-1 tablet:aspect-w-16 tablet:aspect-h-9 !absolute">
      <div className="flex flex-col p-10 tablet:p-20 justify-between tablet:flex-row">
        <h1 className="flex-grow flex flex-col justify-center text-4xl tablet:text-5xl capitalize font-black text-white filter drop-shadow">
          <div>
            Your next
            <span className="block w-auto h-5" />
            home
            <span className="block w-auto h-5" />
            is a
            <span className="block w-auto h-0" />
            click away.
          </div>
        </h1>
        <div className="self-end flex-grow relative tablet:flex tablet:justify-end laptop:bottom-28 laptop:pr-32">
          <button className="px-5 py-3 bg-white">Get Started</button>
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
