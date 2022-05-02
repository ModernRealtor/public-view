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
    },
    {
      title: "Abodfut",
      loc: "/aboufdgdt/"
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
      <div
        className={`bg-secondary-50 w-full h-screen z-0 ${
          isOpen ? "absolute" : "hidden"
        } flex-grow flex-col-reverse flex-wrap right-0 bottom-0 translate-y-full tablet:translate-y-0 tablet:w-auto tablet:h-auto tablet:m-0 tablet:p-0 tablet:flex tablet:static tablet:flex-row-reverse tablet:flex-nowrap tablet:justify-start tablet:items-center tablet:bg-transparent gap-5 laptop:gap-10`}
      >
        {menuData.entries.map(item => (
          <InternalLink
            to={item.loc}
            className={`${item.loc === path? "selected" : ""} tablet:w-auto tablet:text-center tablet:py-0 tablet:my-0 hover:text-accent w-full py-3 mt-5 font-semibold text-left`}
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
