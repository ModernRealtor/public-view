import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LogoIcon from "../assets/icons/logo"

export default function Logo(props) {
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
    <div className={`${props.className} flex flex-nowrap`}>
      <button className="w-11 h-11" aria-label="Return to home">
        <LogoIcon />
      </button>
      <div className="place-content-center flex flex-row flex-wrap justify-start h-full ml-1">
        <span className="tablet:mr-3 text-lg font-bold">
          {data.cms.org.info.name}
        </span>
      </div>
    </div>
  )
}
