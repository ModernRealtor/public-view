import React from "react"

import Layout from "../components/layout"
import AvailableListings from "../components/availableListings"

export default function Listings({ location: { pathname } }) {
  return (
    <Layout path={pathname} title="Browse Listings">
      <div className="outer-layout">
        <h1 className="text-4xl font-medium text-primary-500 py-10">
          Available Listings
        </h1>
        <h2 className="capitalize text-secondary-600 w-full pb-2">
          Brokerage's Featured Listings
          <span className="w-full block border-b"></span>
        </h2>
        <AvailableListings className="flex-wrap justify-evenly"/>
      </div>
    </Layout>
  )
}
