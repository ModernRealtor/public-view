import React from "react"
import Logo from "./logo"
import Menu from "./menu"

export default function Header(props) {
  return (
    <div class="bg-green-100 tablet:bg-green-300 desktop:bg-green-900 mx-auto flex p-3 justify-between">
      <Logo />
      <Menu/>
    </div>
  )
}
