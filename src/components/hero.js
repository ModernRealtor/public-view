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
    <span>
      <div className="z-10 absolute w-full ">
        <h1 className="block text-4xl tablet:text-5xl w-full capitalize font-black py-10 px-10 text-white filter drop-shadow flex flex-col bg-indigo-400">
          <span className="border border-black">Your next</span>
          <span className="border border-black">home</span>
          <span className="border border-black">is a</span>
          <span className="border border-black">click away.</span>
        </h1>
        <button className="p-5 bg-red-100">Get Started</button>
      </div>
      <div>
        <HeroImage />
      </div>
    </span>
  )
}
