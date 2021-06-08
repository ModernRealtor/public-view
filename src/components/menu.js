import React, { useState } from "react"

export default function Menu(props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`flex flex-row-reverse ${props.className}`}>
      <button
        className="w-11 h-11 tablet:hidden border border-orange"
        onClick={() => {
          document.body.classList.toggle("scroll")
          setIsOpen(!isOpen)
        }}
      >
        {isOpen ? "Close" : "Open"}
      </button>
      <div
        className={`bg-white w-screen h-screen ${
          isOpen ? "fixed" : "hidden"
        } flex-grow flex-col-reverse flex-wrap left-0 mt-11 pt-5 tablet:w-auto tablet:h-auto tablet:m-0 tablet:p-0 tablet:flex tablet:static tablet:flex-row-reverse tablet:flex-nowrap tablet:justify-start tablet:bg-transparent gap-10 isolate`}
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
