import React, { useState } from "react"
import { MenuAlt3Icon, XIcon } from "@heroicons/react/solid"

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
        className="w-11 h-11 p-2 tablet:hidden"
        onClick={() => {
          document.body.classList.toggle("scroll")
          setIsOpen(!isOpen)
        }}
      >
        {isOpen ? (
          <XIcon className="h-6 w-6 m-auto" />
        ) : (
          <MenuAlt3Icon className="h-6 w-6 m-auto" />
        )}
      </button>
      <div
        className={`z-50 bg-white w-full h-screen ${
          isOpen ? "fixed" : "hidden"
        } flex-grow flex-col-reverse flex-wrap right-0 mt-11 pt-5 tablet:w-auto tablet:h-auto tablet:m-0 tablet:p-0 tablet:flex tablet:static tablet:flex-row-reverse tablet:flex-nowrap tablet:justify-start tablet:bg-transparent gap-5 laptop:gap-10 isolate`}
      >
        {menuData.entries.map(item => (
          <button className="border border-yellow-700 w-full text-left py-3 px-5 mt-5 tablet:w-auto tablet:text-center tablet:py-0 tablet:my-0">
            {item.title}
          </button>
        ))}
      </div>
    </div>
  )
}
