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
      <div className="z-10 absolute w-full pt-10">
        <h1 className="block text-3xl tablet:text-5xl w-full capitalize font-black py-10 px-5 text-white filter drop-shadow">
          <span className="absolute top-0">
            <span className="relative">Your</span>
            <span className="relative right-8 top-6 inline-block">next</span>
          </span>
          <span className="absolute top-14 right-0 px-inherit">
            <span className="relative left-2">home</span>
            <span className="relative top-6">is</span>
          </span>
          <span className="absolute top-40">
            <span className="">a</span>
            <span className="relative top-6 left-2 inline-block">
              click away.
            </span>
          </span>
        </h1>
      </div>
      <div>
        <HeroImage />
      </div>
    </span>
  )
}
