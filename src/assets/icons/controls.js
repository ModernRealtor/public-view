import React from "react"
import {
  MenuAlt3Icon,
  XIcon,
  ChevronUpIcon,
  PhoneIcon as CellIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid"

export function MenuIcon(props) {
  return <MenuAlt3Icon className={`w-6 h-6 m-auto ${props.className}`} />
}

export function CloseIcon(props) {
  return <XIcon className={`w-6 h-6 m-auto ${props.className}`} />
}

export function CaretIcon(props) {
  return <ChevronUpIcon className={`w-5 h-5 ${props.className}`} />
}

export function PhoneIcon(props) {
  return <CellIcon className={`w-5 h-5 ${props.className}`} />
}

export function LocationIcon(props) {
  return <LocationMarkerIcon className={`w-5 h-5 ${props.className}`} />
}
