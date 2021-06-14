import React from "react"
import { CaretIcon } from "../assets/icons/controls"
import { Disclosure } from "@headlessui/react"
import MLSIcon from "../assets/icons/mls"
import RealtorIcon from "../assets/icons/realtor"
import {
  FacebookLogo,
  InstagramLogo,
  LinkedInLogo,
} from "../assets/icons/socials"

const footerData = {
  contact: {
    title: "Contact Us",
    description: "Call or drop by anytime!",
    entries: [
      {
        title: "Office Number",
        short: "Office",
        icon: null,
        value: "416-666-6666",
      },
      {
        title: "Address",
        short: "Address",
        icon: null,
        value: "34 Example St. Toronto Ontario",
      },
    ],
  },
  socials: {
    title: "Stay Connected",
    description: "Follow us on social media!",
    entries: [
      {
        title: "Facebook",
        short: "FB",
        icon: <FacebookLogo />,
        value: "example.com",
      },
      {
        title: "Instagram",
        short: "IG",
        icon: <InstagramLogo />,
        value: "example.com",
      },
      {
        title: "LinkedIn",
        short: "IN",
        icon: <LinkedInLogo />,
        value: "example.com",
      },
    ],
  },
  preferences: {
    title: "Preferences",
    description: "Modify your preferences",
    entries: [
      {
        key: "language",
        tag: LanguageSelector,
      },
      {
        key: "theme",
        tag: ThemeSelector,
      },
    ],
  },
  language: {
    title: "Language",
    description: "Choose a language.",
    entries: [
      {
        title: "English",
        value: "en",
      },
    ],
  },
  theme: {
    title: "Theme",
    description: "Choose a theme.",
    entries: [
      {
        title: "Light",
        value: "l",
      },
      {
        title: "Dark",
        value: "d",
      },
      {
        title: "System",
        value: "sys",
      },
    ],
  },
  copyright: {
    title: "Copyright",
    value: "©2021 West-100 Capital Realty, Inc.",
  },
  affiliations: {
    title: "Affiliates",
    entries: [
      {
        icon: <MLSIcon />,
        id: 0,
        title: "Trusted listings from REALTOR® Agents.",
        description:
          "The MLS® mark and associated logos identify professional services rendered by REALTOR® members of CREA to effect the purchase, sale and lease of real estate as part of a cooperative selling system.",
      },
      {
        icon: <RealtorIcon />,
        id: 1,
        title: "",
        description:
          "©2021 The Canadian Real Estate Association. All rights reserved. The trademarks REALTOR®, REALTORS® and the REALTOR® logo are controlled by CREA and identify real estate professionals who are members of CREA.",
      },
    ],
  },
}

function FooterDropdown(props) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full py-2">
            <span>{props.title}</span>
            <CaretIcon className={`${open ? "" : "transform rotate-180"} `} />
          </Disclosure.Button>
          <Disclosure.Panel>{props.children}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

function ContactUs(props) {
  return (
    <FooterDropdown {...props}>
      {props.description}
      {props.entries.map(item => (
        <div key={item.short}>
          {item.short}: {item.value}
        </div>
      ))}
    </FooterDropdown>
  )
}

function LanguageSelector(props) {
  return <div>{props.title}</div>
}
function ThemeSelector(props) {
  return <div>{props.title}</div>
}

function Preferences(props) {
  return (
    <FooterDropdown {...props}>
      {props.description}
      {props.entries.map(item => {
        return <item.tag key={item.key} {...footerData[item.key]} />
      })}
    </FooterDropdown>
  )
}

function Socials(props) {
  return (
    <div className="text-center">
      {props.title}
      <div className="flex justify-around p-5">
        {props.entries.map(item => (
          <div key={item.short}>{item.icon}</div>
        ))}
      </div>
    </div>
  )
}
function Copyright(props) {
  return <div className="py-5 text-center">{props.value}</div>
}
function Affiliates(props) {
  return (
    <div className="text-2xs flex flex-col gap-2 mt-5">
      {props.entries.map(item => (
        <div key={item.id} className="flex gap-2">
          <div className="self-center">{item.icon}</div>
          <div className="self-center">
            {item.title} <br /> {item.description}
          </div>
        </div>
      ))}
    </div>
  )
}
export default function Footer(props) {
  return (
    <div className="p-10 mt-16 bg-gray-300 shadow-inner">
      <div className="h-full text-sm">
        <ContactUs {...footerData.contact} />
        <Preferences {...footerData.preferences} />
        <hr className="my-5 mt-16" />
        <Socials {...footerData.socials} />
        <hr className="my-5" />
        <Copyright {...footerData.copyright} />
        <Affiliates {...footerData.affiliations} />
      </div>
    </div>
  )
}
