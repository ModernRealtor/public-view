import React from "react"
import Logo from "../assets/icons/logo"
import Menu from "./menu"

export default function Header(props) {
  return (
    <div className="outer-layout bg-secondary-50 sticky top-0 z-30 mb-0">
      <nav className="flex justify-between py-5">
        <Logo
          gaTag="Header"
          className="text-secondary-900 z-30 flex-auto w-1/3 gap-4"
        />
        <Menu className="flex-auto w-1/3" />
      </nav>
    </div>
  )
}
