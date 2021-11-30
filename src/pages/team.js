import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

export default function Team() {
  const data = useStaticQuery(graphql`
  query {
    cms {
      org {
        team {
          id
          info {
            displayOnPv
          }
        }
      }
    }
  }
`)
  let teamIds = data.cms.org.team
    .filter(teamInfo => teamInfo.info.displayOnPv)
    .map(teamInfo => teamInfo.id)
  return (
    <Layout>
        Team list page <br/>
        {teamIds.map(teamId => (
          <a
            href={`/team/${teamId}`}
            key={teamId}
          >
            Staff {teamId}'s page
          </a>
        ))}
    </Layout>
  )
}
