import React from "react"
import { Link} from "gatsby"


import MLSIcon from "../assets/icons/mls"
import RealtorIcon from "../assets/icons/realtor"
import LogoIcon from "../assets/icons/logo"
import Socials from "../assets/icons/socials"

import {LightningBoltIcon} from "@heroicons/react/solid"

let links = [
  {
    title: "About",
    value: "/about/",
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
    <div className="text-xs font-thin flex flex-col gap-2 mt-16">
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
      <div className="py-12 mt-20 outer-layout ">
        <div className="flex flex-wrap flex-col text-center place-content-center gap-10 tablet:flex-row tablet:place-content-between">
          <LogoIcon className="flex flex-col place-items-center tablet:place-items-start tablet:text-left" logoClassName="w-48 tablet:-ml-2" showTagline={true} />
          <ul className="flex flex-col w-auto pt-2 gap-1.5 font-medium tablet:text-right">
            {links.map((link, i) => (
              <li key={i}>
                <Link to={link.value} className={link.value === props.path? "selected" : ""} >{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Affiliates />
      </div>
      <div className="py-10 outer-layout">
        <span className="flex place-content-between place-items-center gap-y-5 flex-col tablet:flex-row">
          <Socials />
          <div className="flex"><LightningBoltIcon className="w-6 pr-2 text-yellow-400"/> Powered by ModernRealtor</div>
        </span>
      </div>
    </>
  )
}
