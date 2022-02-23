import React from "react"
import { Link } from "gatsby"


import MLSIcon from "../assets/icons/mls"
import RealtorIcon from "../assets/icons/realtor"
import LogoIcon from "../assets/icons/logo"
import Socials from "../assets/icons/socials"

import {LightningBoltIcon} from "@heroicons/react/solid"

let links = [
  {
    title: "About",
    value: "/about",
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
    <div className="text-xs font-thin flex flex-col gap-2 mt-16 text-secondary">
      {affiliations.entries.map(item => (
        <div key={item.id}>
          <item.icon className="float-left h-10 pb-2 pr-2" />
          <span className="leading-none align-top">{item.text}</span>
        </div>
      ))}
    </div>
  )
}

export default function Footer(props) {
  return (
    <>
      <div className="py-12 mt-20 outer-layout bg-primary text-secondary">
        <div className="place-content-between flex flex-wrap">
          <LogoIcon className="flex flex-col w-1/2" logoClassName="w-24" />
          <ul className="flex flex-col w-auto pt-2 gap-1.5 text-right font-medium">
            {links.map((link, i) => (
              <li key={i}>
                <Link to={link.value} className={link.value === props.path? "selected" : ""} >{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Affiliates />
      </div>
      <div className="py-10 outer-layout bg-primary text-secondary">
        <span className="flex place-content-between place-items-center gap-y-5 flex-col tablet:flex-row">
          <Socials />
          <div className="flex"><LightningBoltIcon className="w-6 pr-2 text-yellow-400"/> Powered by ModernRealtor</div>
        </span>
      </div>
    </>
  )
}
