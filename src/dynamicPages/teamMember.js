import React from "react"
import Layout from "../components/layout"

export default function TeamMember({pageContext}) {
  let {info, contact} = pageContext
  return (
    <Layout title={info.name}>
      <div className="outer-layout h-96">
        <div>A Team Member</div>
        <h4>Info</h4>
        {Object.entries(info?.staffInfo || {}).map((entry, i) => (
          <p key={i}> {`${entry[0]} : ${entry[1]}`} </p>
        ))}
        <h4>Contact</h4>
        {Object.entries(contact)
          .filter(entry => entry[1])
          .map((entry, i) => (
          <p key={i}> {`${entry[0]} : ${entry[1]}`}</p>
        ))}
      </div>
    </Layout>
  )
}
