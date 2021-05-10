import React from "react"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>West-100</title>
      </Helmet>
      Hello world!
    </div>
  )
}
