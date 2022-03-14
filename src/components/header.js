import React from "react"
import Logo from "../assets/icons/logo"
import Menu from "./menu"

export default function Header(props) {
  return (
    <div className="outer-layout sticky top-0 mb-0 z-30 bg-secondary-50">
      <nav className="flex justify-between py-5">
          <Logo gaTag="Header" className="flex-auto w-1/3 text-secondary-900 gap-4 z-30" />
          <Menu className="flex-auto w-1/3" />
      </nav>
    </div>
  )
}
