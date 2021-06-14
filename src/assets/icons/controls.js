import React from "react"
import { MenuAlt3Icon, XIcon } from "@heroicons/react/solid"

export function MenuIcon(props) {
  return <MenuAlt3Icon className={`w-6 h-6 m-auto ${props.className}`} />
}

export function CloseIcon(props) {
  return <XIcon className={`w-6 h-6 m-auto ${props.className}`} />
}
