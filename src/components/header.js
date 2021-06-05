import React from "react"
import Logo from "./logo"

export default function Header(props) {
  return (
    <div class="bg-green-100 tablet:bg-green-300 desktop:bg-green-900  flex p-2">
      <Logo />
    </div>
  )
}
