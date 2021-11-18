import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function TempInner(props) {
  const data = useStaticQuery(graphql`
  query {
    cms {
      test
    }
  }
`)
  return (
    <div className="h-48 mx-5 border border-yellow-700">
      What we do/Value Proposition <br />
      Our Services (solutions: buy/sell/etc) <br />
      Testimonials <br />
      oct 22 test
      {data.cms.test}
    </div>
  )
}
