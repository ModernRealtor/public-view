import React from "react"
import Logo from "../assets/icons/logo"
import Menu from "./menu"

export default function Header(props) {
  return (
    <div className="outer-layout bg-secondary text-primary sticky top-0 mb-0 z-30">
      <nav className="flex justify-between py-5">
          <Logo className="flex-auto w-1/3 text-primary gap-4 z-30" />
          <Menu className="flex-auto w-1/3" />
      </nav>
    </div>
  )
}
