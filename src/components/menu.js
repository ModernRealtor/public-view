import React, { useState } from "react"

function MenuIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
      className="h-6 w-6 m-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <title id="title" lang="en">
        Open Menu
      </title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  )
}

function CloseIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
      className="h-6 w-6 m-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <title id="title" lang="en">
        Close Menu
      </title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  )
}

export default function Menu(props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`flex flex-row-reverse ${props.className}`}>
      <button
        className="w-11 h-11 p-2 tablet:hidden"
        onClick={() => {
          document.body.classList.toggle("scroll")
          setIsOpen(!isOpen)
        }}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div
        className={`z-50 bg-white w-11/12 h-screen ${
          isOpen ? "fixed" : "hidden"
        } flex-grow flex-col-reverse flex-wrap right-0 mt-11 pt-5 tablet:w-auto tablet:h-auto tablet:m-0 tablet:p-0 tablet:flex tablet:static tablet:flex-row-reverse tablet:flex-nowrap tablet:justify-start tablet:bg-transparent gap-10 isolate`}
      >
        <button className="border border-yellow-700 w-full text-left py-3 px-5 mt-5 tablet:w-auto tablet:text-center tablet:py-0 tablet:my-0">
          Contact
        </button>
        <button className="border border-yellow-700 w-full text-left py-3 px-5 mt-5 tablet:w-auto tablet:text-center tablet:py-0 tablet:my-0">
          Login
        </button>
      </div>
    </div>
  )
}
