import React from "react"
import Logo from "./logo"
import Menu from "./menu"

export default function Header(props) {
  return (
    <nav className="bg-green-100 tablet:bg-green-300 desktop:bg-green-900 mx-auto flex p-3 justify-between isolate">
      <Logo className="w-1/3" />
      <Menu className="w-1/3"/>
    </nav>
  )
}
