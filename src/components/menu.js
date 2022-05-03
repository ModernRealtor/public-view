import React, { useState } from "react"
import {
  MenuAlt3Icon as MenuIcon,
  XIcon as CloseIcon,
} from "@heroicons/react/solid"

import { InternalLink } from "../components/gaLink"

const menuData = {
  entries: [
    {
      title: "About",
      loc: "/about/"
    }
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

export default function Menu({className, path}) {
  const [isOpen, setIsOpen] = useState(false)

  if (menuData.entries.length === 0) return <></>

  return (
    <div className={`flex flex-row-reverse ${className}`}>
      <button
        className="w-11 h-11 tablet:hidden hover:text-accent p-2"
        onClick={() => {
          document.body.classList.toggle("scroll")
          setIsOpen(!isOpen)
        }}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        {isOpen ? (
          <CloseIcon className="w-6 h-6 m-auto" />
        ) : (
          <MenuIcon className="w-6 h-6 m-auto" />
        )}
      </button>
      <div className={`bg-black ${isOpen? "opacity-30 h-screen" : "opacity-0 h-0 pointer-events-none"} w-full absolute right-0 bottom-0 translate-y-full tablet:hidden transition-opacity duration-300 ease-in-out`}></div>
      <div
        className={`bg-secondary-50 tablet:w-full z-0 ${
          isOpen ? "translate-x-0 w-2/3 h-screen" : "translate-x-full tablet:translate-x-0 h-0 w-0"
        } outer-layout absolute flex flex-col right-0 bottom-0 pt-10 translate-y-full tablet:translate-y-0 tablet:w-auto tablet:h-auto tablet:m-0 tablet:p-0 tablet:flex tablet:static tablet:flex-row-reverse tablet:flex-nowrap tablet:justify-start tablet:items-center tablet:bg-transparent gap-6 laptop:gap-10 transition-transform tablet:transition-none duration-300 ease-in-out overflow-hidden`}
      >
        {menuData.entries.map(item => (
          <InternalLink
            to={item.loc}
            className={`${item.loc === path? "selected" : ""} block text-left ml-2 tablet:w-auto tablet:text-center tablet:p-0 tablet:m-0 hover:text-accent w-full py-2 font-semibold tablet:border-none border-secondary-400 border-l-2 hover:border-primary-500 duration-75`}
            label={item.title}
            tag={`Menu > ${item.title}`}
          >
            {item.title}
          </InternalLink>
        ))}
      </div>
    </div>
  )
}
