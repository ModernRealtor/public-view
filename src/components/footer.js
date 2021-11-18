import React from "react"
import { CaretIcon, PhoneIcon, LocationIcon } from "../assets/icons/controls"
import { useStaticQuery, graphql } from "gatsby"
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

const FooterData = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          tagline
          address
          phoneNumber
          fb
          instagram
          linkedIn
          youtube
        }
      }
    }
  `)

  return {
    meta: {
      icon: LogoIcon,
      title: `${data.site.siteMetadata.title}`,
      subtitle: `${data.site.siteMetadata.tagline}`,
    },
    contact: {
      title: "Contact Us",
      description: "Call or drop by anytime!",
      entries: [
        {
          title: "Office Number",
          short: "tel",
          icon: <PhoneIcon />,
          value: `${data.site.siteMetadata.phoneNumber}`,
        },
        {
          title: "Address",
          short: "address",
          icon: <LocationIcon />,
          value: `${data.site.siteMetadata.address}`,
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
          value: `${data.site.siteMetadata.fb}`,
        },
        {
          title: "Instagram",
          short: "IG",
          icon: <InstagramLogo />,
          value: `${data.site.siteMetadata.instagram}`,
        },
        {
          title: "LinkedIn",
          short: "IN",
          icon: <LinkedInLogo />,
          value: `${data.site.siteMetadata.linkedIn}`,
        },
        {
          title: "Youtube",
          short: "YT",
          icon: <YoutubeLogo />,
          value: `${data.site.siteMetadata.youtube}`,
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
      value: `©2021 ${data.site.siteMetadata.title}`,
    },
    affiliations: {
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
    },
  }
}

function FooterDropdown(props) {
  return (
    <>
      <span className="laptop:hidden block w-full max-w-sm">
        <Disclosure>
          {({ open }) => (
            <div className={`w-full ${props.className}`}>
              <Disclosure.Button className="flex justify-between w-full py-2">
                <span>{props.title}</span>
                <CaretIcon
                  className={`${open ? "" : "transform rotate-180"} `}
                />
              </Disclosure.Button>
              <Disclosure.Panel>{props.children}</Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </span>
      <span className="laptop:block hidden">
        <div className={`w-64 max-w-xs ${props.className}`}>
          {props.title}
          <hr className="w-full" />
          {props.children}
        </div>
      </span>
    </>
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
  let footerData = FooterData()
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
    <div className="laptop:flex-row flex flex-col flex-auto max-w-sm text-center">
      <span className="m-auto">{props.title}</span>
      <div className="items-stretch flex-auto p-5">
        <ul className="flex justify-around max-w-xs m-auto">
          {props.entries.map(item => (
            <li key={item.short}>
              <a
                href={item.value}
                target="blank"
                aria-label={`Visit our ${item.title} page`}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
function Copyright(props) {
  return <div className="laptop:text-left text-center">{props.value}</div>
}
function Affiliates(props) {
  return (
    <div className="text-2xs flex flex-col gap-2 mt-8">
      {props.entries.map(item => (
        <div key={item.id}>
          <item.icon className="float-left h-8 pb-2 pr-2" />
          <span className="leading-none align-top">{item.text}</span>
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
    <div className="tablet:text-left tablet:m-0 flex flex-wrap items-center m-auto text-center">
      {<props.icon className="w-12" />}
      <div className="flex flex-col flex-auto">
        <span>{props.title}</span>
        <span>{props.subtitle}</span>
      </div>
    </div>
  )
}

function FooterBanner(props) {
  let footerData = FooterData()
  return (
    <div className="my-20">
      <hr className="my-5" />
      <div className="gap-y-8 flex flex-wrap justify-between">
        <BusinessTag {...footerData.meta} />
        <Socials {...footerData.socials} />
      </div>
      <hr className="my-5" />
      <Copyright {...footerData.copyright} />
    </div>
  )
}

export default function Footer(props) {
  let footerData = FooterData()
  return (
    <div className="p-10 mt-20 bg-gray-300 shadow-inner">
      <div className="h-full text-sm">
        <div className="place-content-center gap-x-20 gap-y-10 laptop:mb-32 flex flex-wrap mt-5 mb-10">
          <About {...footerData.about} className="flex-grow" />
          <ContactUs {...footerData.contact} className="flex-grow" />
          <Preferences {...footerData.preferences} className="flex-grow" />
        </div>
        <FooterBanner />
        <Affiliates {...footerData.affiliations} />
      </div>
    </div>
  )
}
