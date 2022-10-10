import React from "react"
// import { LightningBoltIcon } from "@heroicons/react/solid"
// import { useStaticQuery, graphql } from "gatsby"

// import MLSIcon from "../assets/icons/mls"
// import RealtorIcon from "../assets/icons/realtor"
// import LogoIcon from "../assets/icons/logo"
// import Socials from "../assets/icons/socials"
// import { InternalLink } from "./gaLink"


// let affiliations = {
//   title: "Affiliates",
//   entries: [
//     {
//       icon: RealtorIcon,
//       id: "realtor-icon",
//       text:
//         "©2021 The Canadian Real Estate Association. All rights reserved. The trademarks REALTOR®, REALTORS® and the REALTOR® logo are controlled by CREA and identify real estate professionals who are members of CREA.",
//     },
//     {
//       icon: MLSIcon,
//       id: "mls-icon",
//       text: (
//         <>
//           Trusted listings from REALTOR® Agents.
//           <br />
//           The MLS® mark and associated logos identify professional services
//           rendered by REALTOR® members of CREA to effect the purchase, sale and
//           lease of real estate as part of a cooperative selling system.,
//         </>
//       ),
//     },
//   ],
// }

// function Affiliates(props) {
//   return (
//     <div className="flex flex-col gap-2 mt-16 text-xs font-thin">
//       {affiliations.entries.map(item => (
//         <div key={item.id}>
//           <item.icon className="float-left h-10 pb-2 pr-2" />
//           <span className="leading-none align-top">{item.text}</span>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default function Footer(props) {
//   let {cms: {curOrg: {staff}}} = useStaticQuery(graphql`
//     query{
//       cms{
//         curOrg{
//           staff {
//             displayOnPv
//             user {
//               name
//             }
//           }
//         }
//       }
//     }
//   `)
//   let displayStaff = (staff || []).filter(({displayOnPv}) => displayOnPv)
//   let links = {
//     "Brokerage": [
//       {
//         title: "About",
//         value: "/about/",
//       },
//     ],
//     "Team": displayStaff.map(({user: {name}})=> ({
//       title: name,
//       value: `/team/${name.replace(/\s+/g, "")}`
//     }))
//   }
//   return (
//     <footer>
//       <div className="outer-layout  py-12 mt-20">
//         <div className="place-content-center tablet:flex-row tablet:place-content-between flex flex-col flex-wrap gap-10 text-center">
//           <LogoIcon
//             gaTag="Footer"
//             className="place-items-center tablet:place-items-start tablet:text-left flex flex-col"
//             logoClassName="w-48 tablet:-ml-2"
//             showTagline={true}
//           />
//           <div className="flex flex-col gap-6 laptop:flex-row laptop:gap-16 desktop:gap-24">
//             {Object.entries(links).map(([linkTitle, linkData]) => (
//               <div key={linkTitle} className="tablet:text-right">
//                 <span className="uppercase text-sm font-light inline-block w-28 border-b">{linkTitle}</span>
//                 <ul className="flex flex-col w-auto pt-2 gap-1.5 font-medium">
//                   {linkData.map((link, i) => (
//                     <li key={i}>
//                       <InternalLink
//                         to={link.value}
//                         className={link.value === props.path ? "selected" : ""}
//                         tag="Footer"
//                         label={link.title}
//                       >
//                         {link.title}
//                       </InternalLink>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//         <Affiliates />
//       </div>
//       <div className="outer-layout py-10">
//         <span className="place-content-between place-items-center gap-y-5 tablet:flex-row flex flex-col">
//           <Socials />
//           <div className="flex">
//             <LightningBoltIcon className="w-6 pr-2 text-yellow-400" /> Powered
//             by ModernRealtor
//           </div>
//         </span>
//       </div>
//     </footer>
//   )
// }

export default function Temp() {
  return (<div>Temp</div>)
}