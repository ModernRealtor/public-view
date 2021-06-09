import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function HeroImage(props) {
  const attrs = {
    src: "../assets/images/hero.jpg",
    alt: "Hero Image",
    layout: "fullWidth",
    placeholder: "blurred",
    className: "filter brightness-95",
  }
  return (
    <>
      <span className="block tablet:hidden">
        <StaticImage
          aspectRatio={1}
          transformOptions={{
            cropFocus: "center",
          }}
          {...attrs}
        />
      </span>
      <span className="hidden tablet:block">
        <StaticImage {...attrs} />
      </span>
    </>
  )
}

export default function Hero(props) {
  return (
    <span className="relative">
      <div className="z-10 w-full aspect-w-1 aspect-h-1 tablet:aspect-none !absolute bg-indigo-100 bg-opacity-50">
        <div className="flex flex-col px-10 py-10">
          <h1 className="flex-grow block text-4xl tablet:text-5xl capitalize font-black text-white filter drop-shadow flex flex-col justify-around">
            <span className="border border-black">Your next</span>
            <span className="border border-black">home</span>
            <span className="flex flex-col relative ">
              <span className="border border-black">is a</span>
              <span className="border border-black">click away.</span>
            </span>
          </h1>
          <button className="px-5 py-3 border border-black self-end">Get Started</button>
        </div>
      </div>
      <HeroImage />
    </span>
  )
}
