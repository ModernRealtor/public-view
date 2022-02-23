import React from "react"
import { Link } from "gatsby"
import {ArrowLeftIcon} from "@heroicons/react/solid"

import Layout from "../components/layout"
import { contactIcons } from "../assets/icons/socials"

export default function TeamMember({pageContext}) {
  let {info: {name, staffInfo: {title}}, contact} = pageContext
  return (
    <Layout title={name}>
      <div className="outer-layout h-96">
        <Link to="/team/" className="flex">
          <ArrowLeftIcon className="w-6 pr-2"/>
          All Team Members
        </Link>
        <div>{name}, {title}</div>
        <h4>You can reach me at any of the following:</h4>
        {Object.entries(contact)
          .filter(entry => entry[1])
          .map((entry, i) => {
            let Icon = contactIcons[entry[0]].icon
            return <p key={i} className="flex" title={contactIcons[entry[0]].desc}> <Icon className="w-6 pr-2"/> {entry[1]}</p>
          })}
      </div>
    </Layout>
  )
}
