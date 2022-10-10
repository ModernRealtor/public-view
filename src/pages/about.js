import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

// import { contactIcons } from "../assets/icons/socials"
// import Layout from "../components/layout"
// import { InternalLink, ExternalLink } from "../components/gaLink"

// export default function About({ location: { pathname } }) {
//   let {
//     allFile,
//     cms: {
//       curOrg: {
//         name, about, tagline,
//         contact,
//         staff,
//       },
//     },
//   } = useStaticQuery(graphql`
//     query {
//       cms {
//         curOrg {
//           name
//           about
//           tagline
//           contact {
//             cell
//             business
//             email
//             addr
//           }
//           staff {
//             id
//             title
//             displayOnPv
//             user {
//               name
//             }
//           }
//         }
//       }
//       allFile(filter: { sourceInstanceName: { eq: "teamImages" } }) {
//         nodes {
//           name
//           childImageSharp {
//             gatsbyImageData(
//               placeholder: BLURRED
//               aspectRatio: 1
//               width: 200
//               transformOptions: { cropFocus: NORTH }
//             )
//           }
//         }
//       }
//     }
//   `)
//   let teamMembers = staff
//     .filter(({displayOnPv}) => displayOnPv)
//     .map(({id, title, user: {name}}) => ({
//       id,
//       name,
//       title,
//     }))

//   let teamImages = {}
//   allFile?.nodes?.forEach(imgNode => {
//     teamImages[imgNode.name] = imgNode
//   })
//   return (
//     <Layout path={pathname} title="About Us">
//       <div className="outer-layout desktop:py-28 py-10">
//         <h1 className="text-primary-500  pb-4 text-4xl font-semibold">
//           About Us
//         </h1>
//         <div className="pb-2">
//           <h2 className="text-secondary-400 text-2xl">{name}</h2>
//           {tagline ? (
//             <h3 className="text-secondary-400 py-1 text-lg">{tagline}</h3>
//           ) : (
//             ""
//           )}
//           {about ? (
//             <p className="py-6 text-justify whitespace-pre-wrap">{about}</p>
//           ) : (
//             ""
//           )}
//         </div>
//         <div className="py-4">
//           <h2 className="text-primary-500 tablet:pt-12 desktop:pt-20 py-4 text-4xl font-semibold">
//             Contact Us
//           </h2>
//           <p className="pb-1">Reach us using any of the following:</p>
//           {Object.entries(contact)
//             .filter(entry => entry[1])
//             .map((entry, i) => {
//               let Icon = contactIcons[entry[0]]
//               let val = entry[1]
//               return (
//                 <ExternalLink
//                   href={`${Icon.prefix}${val}`}
//                   key={i}
//                   className="w-fit max-w-max flex items-baseline py-1 font-medium"
//                   label={Icon.desc}
//                   tag="About > Contact"
//                 >
//                   <Icon.icon className="w-6 pr-2" /> {val}
//                 </ExternalLink>
//               )
//             })}
//           {contact["addr"] ? (
//             <StaticImage
//               src="../../static/map.png"
//               className="max-w-lg"
//               placeholder="blurred"
//               alt="Map showing brokerage location"
//             />
//           ) : (
//             ""
//           )}
//         </div>
//         <div className="py-10">
//           <h2 className="text-primary-500 tablet:pt-16 desktop:pt-20 py-8 pb-10 text-4xl font-semibold">
//             Our Team
//           </h2>
//           <ul className="justify-evenly laptop:justify-start flex flex-wrap content-around gap-10">
//             {teamMembers.map(({ id, title, name }) => {
//               return (
//                 <TeamIcon
//                   key={id}
//                   title={title}
//                   name={name}
//                   imgNode={teamImages[id]}
//                 />
//               )
//             })}
//           </ul>
//         </div>
//       </div>
//     </Layout>
//   )
// }

// function TeamIcon({ title, name, imgNode }) {
//   let image = getImage(imgNode)
//   let slug = name.replace(/\s+/g, "")
//   return (
//     <li>
//       <InternalLink
//         to={`/team/${slug}`}
//         label={`About ${name}`}
//         tag="About > Team"
//       >
//         <div className="place-items-center flex flex-col text-center">
//           <GatsbyImage
//             image={image}
//             alt={`${name}'s Headshot`}
//             className="rounded-b-full"
//           />
//           <p className="font-bold">{name}</p>
//           <p className="font-medium">{title}</p>
//         </div>
//       </InternalLink>
//     </li>
//   )
// }


export default function Temp() {
  <div>Temp</div>
}