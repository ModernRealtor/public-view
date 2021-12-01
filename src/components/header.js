import React from "react"
import Logo from "./logo"
import Menu from "./menu"

export default function Header(props) {
  return (
    <div className="outer-layout bg-white shadow sticky top-0 z-30 ">
      <nav className="flex justify-between py-5">
          <Logo className="flex-auto w-1/3" />
          <Menu className="flex-auto w-1/3" />
      </nav>
    </div>
  )
}
