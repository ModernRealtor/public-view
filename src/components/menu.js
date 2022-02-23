import React, { useState } from "react"
import {
  MenuAlt3Icon as MenuIcon,
  XIcon as CloseIcon
} from "@heroicons/react/solid"

const menuData = {
  entries: [
    // For now
    // {
    //   title: "Careers",
    // },
    // {
    //   title: "Lease",
    // },
    // {
    //   title: "Buy",
    // },
    // {
    //   title: "Sell",
    // },
  ],
}

export default function Menu(props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`flex flex-row-reverse ${props.className}`}>
      <button
        className="w-11 h-11 tablet:hidden p-2 hover:text-accent"
        onClick={() => {
          document.body.classList.toggle("scroll")
          setIsOpen(!isOpen)
        }}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        {isOpen ? <CloseIcon className="w-6 h-6 m-auto" /> : <MenuIcon className="w-6 h-6 m-auto" />}
      </button>
      <div
        className={`bg-secondary w-full h-screen ${
          isOpen ? "absolute" : "hidden"
        } flex-grow flex-col-reverse flex-wrap right-0 mt-12 pt-5 tablet:w-auto tablet:h-auto tablet:m-0 tablet:p-0 tablet:flex tablet:static tablet:flex-row-reverse tablet:flex-nowrap tablet:justify-start tablet:bg-transparent gap-5 laptop:gap-10`}
      >
        {menuData.entries.map(item => (
          <button
            key={item.title}
            className="tablet:w-auto tablet:text-center tablet:py-0 tablet:my-0 w-full px-5 py-3 mt-5 text-left font-semibold hover:text-accent"
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  )
}
