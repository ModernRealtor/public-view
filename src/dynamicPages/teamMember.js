import React from "react"
import Layout from "../components/layout"

export default function TeamMember({pageContext}) {
  let {info, contact} = pageContext
  return (
    <Layout>
      <div className="outer-layout">
        A Team Member <br/>
        <h4>Info</h4>
        {Object.entries(info).map((entry, i) => (
          <p key={i}> {`${entry[0]} : ${entry[1]}`} </p>
        ))}
        <h4>Contact</h4>
        {contact.map(contactInfo => (
          Object.entries(contactInfo)
            .map((entry, i) => (
            <p key={i}> {`${entry[0]} : ${entry[1]}`}</p>
            ))
        ))}
      </div>
    </Layout>
  )
}
