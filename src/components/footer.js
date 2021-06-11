import React, { useState } from "react"
import { ChevronUpIcon } from "@heroicons/react/solid"
import { Disclosure } from "@headlessui/react"

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
    entries: [
      {
        title: "Facebook",
        short: "FB",
        icon: null,
        value: "example.com",
      },
      {
        title: "Instagram",
        short: "IG",
        icon: null,
        value: "example.com",
      },
      {
        title: "LinkedIn",
        short: "IN",
        icon: null,
        value: "example.com",
      },
    ],
  },
  copyright: "copyright text",
  language: [
    {
      title: "English",
      value: "en",
    },
  ],
  affiliations: [
    {
      icon: null,
      title: "Trusted listings from REALTOR® Agents.",
      description:
        "The MLS® mark and associated logos identify professional services rendered by REALTOR® members of CREA to effect the purchase, sale and lease of real estate as part of a cooperative selling system.",
    },
    {
      icon: null,
      title: null,
      description:
        "©2021 The Canadian Real Estate Association. All rights reserved. The trademarks REALTOR®, REALTORS® and the REALTOR® logo are controlled by CREA and identify real estate professionals who are members of CREA.",
    },
  ],
}

function ContactUs(props) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="py-2  w-full flex justify-between">
            <span>{props.title}</span>
            <ChevronUpIcon
              className={`${
                open ? "transform rotate-180" : ""
              } w-5 h-5 text-purple-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            {props.description}
            {props.entries.map(item => (
              <div>
                {item.short}: {item.value}
              </div>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default function Footer(props) {
  return (
    <div className="bg-gray-300 shadow-inner h-96 mt-16 p-10">
      <div className="border border-red-300 h-full">
        <ContactUs {...footerData.contact} />
      </div>
    </div>
  )
}
