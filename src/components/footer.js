import React from "react"
import MLSIcon from "../assets/icons/mls"
import RealtorIcon from "../assets/icons/realtor"
import LogoIcon from "./logo"
import Socials from "../assets/icons/socials"

let links = [
  {
    title: "About",
    value: "/about",
  },
  {
    title: "Contact",
    value: "/contact",
  },
  {
    title: "Team",
    value: "/team",
  }
]

let affiliations = {
  title: "Affiliates",
  entries: [
    {
      icon: RealtorIcon,
      id: "realtor-icon",
      text:
        "©2021 The Canadian Real Estate Association. All rights reserved. The trademarks REALTOR®, REALTORS® and the REALTOR® logo are controlled by CREA and identify real estate professionals who are members of CREA.",
    },
    {
      icon: MLSIcon,
      id: "mls-icon",
      text: (
        <>
          Trusted listings from REALTOR® Agents.
          <br />
          The MLS® mark and associated logos identify professional services
          rendered by REALTOR® members of CREA to effect the purchase, sale
          and lease of real estate as part of a cooperative selling system.,
        </>
      ),
    },
  ],
}


function Affiliates(props) {
  return (
    <div className="text-2xs flex flex-col gap-2 mt-10">
      {affiliations.entries.map(item => (
        <div key={item.id}>
          <item.icon className="float-left h-8 pb-2 pr-2" />
          <span className="leading-none align-top">{item.text}</span>
        </div>
      ))}
    </div>
  )
}

export default function Footer(props) {
  return (
    <>
      <div className="py-10 bg-gray-300 shadow-inner outer-layout">
        <div className="place-content-between flex flex-wrap">
          <LogoIcon className="flex flex-col w-1/2" logoClassName="w-24" />
          <ul className="flex flex-col w-auto pt-2 gap-1.5 text-right">
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.value}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <Affiliates />
      </div>
      <div className="bg-gray-700 py-10 outer-layout">
        <span className="flex place-content-between place-items-center gap-y-5 flex-col tablet:flex-row">
          <Socials />
          <div>&copy; Copyright 2021 ModernRealtor</div>
        </span>
      </div>
    </>
  )
}
