import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import LogoSvg from "/static/logos/main.svg"
import { InternalLink } from "../../components/gaLink"

function LogoIcon(props) {
  return <img src={LogoSvg} alt="Company Logo" className="w-64 h-auto" />
}

export default function Logo(props) {
  const {
    cms: {
      org: {
        info: { name, tagline },
      },
    },
  } = useStaticQuery(graphql`
    query {
      cms {
        org {
          info {
            name
            tagline
          }
        }
      }
    }
  `)

  return (
    <div className={`${props.className} flex flex-nowrap`}>
      <InternalLink
        className={`w-16 hover:text-accent ${props.logoClassName}`}
        label="Home"
        to="/"
        tag={props.gaTag}
      >
        <LogoIcon />
      </InternalLink>
      <div className="place-content-center flex flex-row flex-wrap justify-start h-full">
        <span className="tablet:mr-3 text-lg font-bold capitalize">{name}</span>
      </div>
      {props.showTagline ? <div>{tagline}</div> : ""}
    </div>
  )
}
