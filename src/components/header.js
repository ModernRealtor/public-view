import React from "react"
import Logo from "./logo"
import Menu from "./menu"

export default function Header(props) {
  return (
    <nav className="flex justify-between p-5 mx-auto bg-white">
      <Logo className="flex-auto w-1/3" />
      <Menu className="flex-auto w-1/3" />
    </nav>
  )
}
