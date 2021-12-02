import React from "react"
import Layout from "../components/layout"

export default function Contact({location}) {
  return (
    <Layout path={location.pathname}>
      <span className="outer-layout">
        <div className="h-96">
          Contact page
        </div>
      </span>
    </Layout>
  )
}
