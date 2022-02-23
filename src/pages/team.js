import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

export default function Team({location}) {
  let {cms: {org: {team: {edges}}}} = useStaticQuery(graphql`
  query {
    cms {
      org {
        team(all: true) {
          edges {
            node {
              id
              info {
                staffInfo {
                  displayOnPv
                }
              }
            }
          }
        }
      }
    }
  }
`)
console.log(edges)
  let teamIds = edges
    .filter(({node: {info: {staffInfo}}}) => staffInfo.displayOnPv)
    .map(({node: {id}}) => id)
  return (
    <Layout path={location.pathname} title="Our Team">
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
