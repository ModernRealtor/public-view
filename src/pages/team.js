import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

export default function Team({location}) {
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
    <Layout path={location.pathname}>
      <div className="outer-layout h-96">
        <div>Team list page</div> 
        <ul>
        {teamIds.map(teamId => (
          <li key={teamId}>
            <a href={`/team/${teamId}`}> Staff {teamId}'s page</a>
          </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
