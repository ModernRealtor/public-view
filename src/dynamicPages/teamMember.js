import React from "react"

import Layout from "../components/layout"
import { contactIcons } from "../assets/icons/socials"

export default function TeamMember({pageContext}) {
  let {info: {name, imageUrl, staffInfo: {title, about}}, contact} = pageContext
  return (
    <Layout title={name}>
      <div className="outer-layout py-4">
        <h2 className="font-semibold text-4xl py-12">{name}</h2>
        <div className="py-8 flex gap-16">
          <div className="flex-shrink-0 flex flex-col gap-10">
            <img src={imageUrl} alt={`${name}'s Headshot`} className="object-cover object-top w-64 h-64 rounded-full "/>
            <div>
              {Object.entries(contact)
                .filter(entry => entry[1])
                .map((entry, i) => {
                  let Icon = contactIcons[entry[0]].icon
                  return <p key={i} className="flex" title={contactIcons[entry[0]].desc}> <Icon className="w-6 pr-2"/> {entry[1]}</p>
                })}
            </div>
          </div>
          
          <div className="flex flex-col py-8 gap-12">
            <div><h3 className="font-medium text-lg">{title}</h3></div>
            <div>{about}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
