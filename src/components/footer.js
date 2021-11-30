import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
    <div className="text-2xs flex flex-col gap-2 mt-8">
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
  const data = useStaticQuery(graphql`
  query {
    cms {
      org {
        info{
          name 
        }
      }
    }
  }
`)
  return (
    <div className="p-10 mt-20 bg-gray-300 shadow-inner">
      <div className="h-full text-sm">
        <div className="place-content-center gap-x-20 gap-y-10 laptop:mb-32 flex flex-wrap mt-5 mb-10">
          <LogoIcon className="flex-col" logoClassName="w-36" />
          {links.map((link, i) => (
            <a 
              href={link.value}
              className="flex-grow"
              key={i}
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className="laptop:text-left text-center">&copy; Copyright 2021 {data.cms.org.info.name}</div>
        <Socials />
        <Affiliates />
      </div>
    </div>
  )
}
