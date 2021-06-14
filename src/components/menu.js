import React, { useState } from "react"
import { MenuIcon, CloseIcon } from "../assets/icons/controls"

const menuData = {
  entries: [
    {
      title: "Get Started",
    },
    {
      title: "Login",
    },
  ],
}

export default function Menu(props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`flex flex-row-reverse ${props.className}`}>
      <button
        className="w-11 h-11 tablet:hidden p-2"
        onClick={() => {
          document.body.classList.toggle("scroll")
          setIsOpen(!isOpen)
        }}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div
        className={`bg-white w-full h-screen ${
          isOpen ? "absolute" : "hidden"
        } flex-grow flex-col-reverse flex-wrap right-0 mt-12 pt-5 tablet:w-auto tablet:h-auto tablet:m-0 tablet:p-0 tablet:flex tablet:static tablet:flex-row-reverse tablet:flex-nowrap tablet:justify-start tablet:bg-transparent gap-5 laptop:gap-10`}
      >
        {menuData.entries.map(item => (
          <button
            key={item.title}
            className="tablet:w-auto tablet:text-center tablet:py-0 tablet:my-0 w-full px-5 py-3 mt-5 text-left border border-yellow-700"
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  )
}
