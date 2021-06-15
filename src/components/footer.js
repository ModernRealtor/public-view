import React from "react"
import { CaretIcon, PhoneIcon, LocationIcon } from "../assets/icons/controls"
import { Disclosure } from "@headlessui/react"
import MLSIcon from "../assets/icons/mls"
import RealtorIcon from "../assets/icons/realtor"
import LogoIcon from "../assets/icons/logo"
import {
  FacebookLogo,
  InstagramLogo,
  LinkedInLogo,
  YoutubeLogo,
} from "../assets/icons/socials"

const footerData = {
  meta: {
    icon: LogoIcon,
    title: "West-100 Capital Realty Inc., Brokerage",
    subtitle: "Independently Owned and Operated",
  },
  contact: {
    title: "Contact Us",
    description: "Call or drop by anytime!",
    entries: [
      {
        title: "Office Number",
        short: "tel",
        icon: <PhoneIcon />,
        value: "(416) 658-5553",
      },
      {
        title: "Address",
        short: "address",
        icon: <LocationIcon />,
        value: "2544 Eglinton Ave W, York, ON M6M 1T1",
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
        value: "https://www.facebook.com/Realty100Plus",
      },
      // The following two she only has a personal, not a business. For now. So not linking it
      {
        title: "Instagram",
        short: "IG",
        icon: <InstagramLogo />,
        value: "/",
      },
      {
        title: "LinkedIn",
        short: "IN",
        icon: <LinkedInLogo />,
        value: "/",
      },
      {
        title: "Youtube",
        short: "YT",
        icon: <YoutubeLogo />,
        value:
          "https://www.youtube.com/channel/UCKQ4oHRYH_aAQHaSXoPdaSQ/featured",
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
  about: {
    title: "The Brokerage",
    entries: [
      {
        title: "About",
        short: "about",
        value: "/",
      },
      {
        title: "The Team",
        short: "team",
        value: "/",
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
        <div key={item.short} aria-label={item.title} className="flex gap-4">
          {item.icon} {item.value}
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
          <a
            key={item.short}
            href={item.value}
            target="blank"
            aria-label={`Visit our ${item.title} page`}
          >
            {item.icon}
          </a>
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

function About(props) {
  return (
    <FooterDropdown {...props}>
      <ul>
        {props.entries.map(item => {
          return (
            <li key={item.short}>
              <a href={item.value}>{item.title}</a>
            </li>
          )
        })}
      </ul>
    </FooterDropdown>
  )
}

function BusinessTag(props) {
  return (
    <div className="grid grid-flow-col grid-rows-2 gap-2 mt-8">
      {<props.icon className="w-12 row-span-2" />}
      <span>{props.title}</span>
      <span>{props.subtitle}</span>
    </div>
  )
}

export default function Footer(props) {
  return (
    <div className="p-10 mt-16 bg-gray-300 shadow-inner">
      <div className="h-full text-sm">
        <About {...footerData.about} />
        <ContactUs {...footerData.contact} />
        <Preferences {...footerData.preferences} />
        <BusinessTag {...footerData.meta} />
        <hr className="my-5 mt-10" />
        <Socials {...footerData.socials} />
        <hr className="my-5" />
        <Copyright {...footerData.copyright} />
        <Affiliates {...footerData.affiliations} />
      </div>
    </div>
  )
}
