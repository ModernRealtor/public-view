import React from "react"
import { MenuAlt3Icon, XIcon, ChevronUpIcon } from "@heroicons/react/solid"

export function MenuIcon(props) {
  return <MenuAlt3Icon className={`w-6 h-6 m-auto ${props.className}`} />
}

export function CloseIcon(props) {
  return <XIcon className={`w-6 h-6 m-auto ${props.className}`} />
}

export function CaretIcon(props) {
  return <ChevronUpIcon className={`w-5 h-5 ${props.className}`} />
}
