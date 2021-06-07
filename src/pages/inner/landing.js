import React from "react"
import Hero from "../../components/hero/hero"
import MailingList from "../../components/mailingList"

export default function LandingPage(props) {
  return (
    <div className="flex flex-col gap-16 mb-5">
      <Hero/>
      <MailingList/>
    </div>
  )
}
