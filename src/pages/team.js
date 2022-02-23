import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"


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
                name
                staffInfo {
                  title
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
  let teamMembers = edges
    .filter(({node: {info: {staffInfo}}}) => staffInfo.displayOnPv)
    .map(({node: {id, info: {name, staffInfo: {title}}}}) => ({id, name, title}))
  return (
    <Layout path={location.pathname} title="Our Team">
      <div className="outer-layout h-96">
        <h2>Meet our Team</h2> 
        <h3>Click on a team member learn more</h3>
        <ul>
        {teamMembers.map(({id, title, name}) => (
          <li key={id}>
            <Link to={`/team/${id}`}> 
              <div className="flex">
                {name}, {title}
              </div>
            </Link>
          </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
