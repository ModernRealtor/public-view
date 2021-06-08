import React from "react"
import Logo from "./logo"
import Menu from "./menu"

export default function Header(props) {
  return (
    <nav className="bg-white mx-auto flex p-5 justify-between">
      <Logo className="w-1/3 flex-auto" />
      <Menu className="w-1/3 flex-auto" />
    </nav>
  )
}
