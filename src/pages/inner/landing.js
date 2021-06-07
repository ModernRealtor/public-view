import React from "react"
import Hero from "../../components/hero/hero"
import MailingList from "../../components/mailingList"

export default function LandingPage(props) {
  return (
    <div className="bg-red-100 flex flex-col gap-5 py-5 my-5">
      <Hero/>
      <MailingList/>
    </div>
  )
}
