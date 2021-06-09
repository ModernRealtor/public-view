import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function HeroImage(props) {
  const attrs = {
    src: "../assets/images/hero.jpg",
    alt: "Hero Image",
    layout: "fullWidth",
    placeholder: "blurred",
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
      <div className="z-10 absolute">
        <span className="border border-yellow-700 block text-5xl capitalize font-black mb-5">
          Your next home is a click away.
        </span>
        <span className="block mt-5">Description</span>
      </div>
      <div>
        <HeroImage />
      </div>
    </span>
  )
}
