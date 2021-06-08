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
          aspectRatio={2 / 3}
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
      <div>
        <HeroImage />
      </div>
      <div className="border border-yellow-700 h-60 mx-5 tablet:h-72 tablet:w-2/3 desktop:w-auto">
        Hero Txt
      </div>
    </span>
  )
}
