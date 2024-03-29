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
      <div className="pointer-events-none fixed left-0 top-0 overflow-hidden h-screen w-full">
        <div className={`bg-black ${isOpen? "opacity-[.6] pointer-events-auto " : "opacity-0 pointer-events-none"} h-screen w-full absolute left-0 bottom-0 translate-y-48 tablet:hidden transition-opacity ease-out`}></div>
      </div>
      <div
        className={`bg-secondary-50 w-full h-fit pb-12 transition-opacity ease-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none tablet:pointer-events-auto"
        } outer-layout tablet:opacity-100 absolute flex flex-col right-0 bottom-0 pt-10 translate-y-full tablet:translate-y-0 tablet:w-auto tablet:h-auto tablet:m-0 tablet:p-0 tablet:relative tablet:flex-row-reverse tablet:flex-nowrap tablet:justify-start tablet:items-center tablet:bg-transparent gap-6 laptop:gap-10 overflow-hidden`}
      >
        {menuData.entries.map((item, i) => (
          <InternalLink
            key={i}
            to={item.loc}
            className={`${item.loc === path? "selected" : ""} ${isOpen? "" : "-translate-x-full"} tablet:translate-x-0 transition-transform duration-200 ease-in-out text-left ml-2 tablet:w-auto tablet:text-center tablet:p-0 tablet:m-0 hover:text-accent w-full py-2 font-semibold tablet:border-none border-secondary-400 border-l-2 hover:border-primary-500`}
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
