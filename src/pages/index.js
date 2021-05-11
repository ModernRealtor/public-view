import React from "react"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="description" content="public site" />
        <title>West-100</title>
      </Helmet>
      Hello world!
    </div>
  )
}
