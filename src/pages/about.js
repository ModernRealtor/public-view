import React from "react"
import Layout from "../components/layout"

export default function About({location}) {
  return (
    <Layout path={location.pathname}>
      <span className="outer-layout">
        <div className="h-96">
          About page
        </div>
      </span>
    </Layout>
  )
}
