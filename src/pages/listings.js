import React from "react"

import Layout from "../components/layout"
import AvailableListings from "../components/availableListings"

export default function Listings({ location: { pathname } }) {
  let Listings = AvailableListings()
  return (
    <Layout path={pathname} title="Browse Listings">
      <div className="outer-layout">
        <h1 className="text-4xl font-medium text-primary-500 py-10">
          Available Listings
        </h1>
        <h2 className="capitalize text-secondary-600 w-full pb-2">
          <div className="flex justify-between items-end">
            <span>Brokerage's Featured Listings</span>
            <span className="text-xs font-thin">Displaying {Listings.length} item(s)</span>
          </div>
          <span className="w-full block border-b"></span>
        </h2>
        <div className={`py-4 flex gap-8 flex-wrap justify-evenly`}>
          {Listings.length > 0 ? (Listings.map((Listing) => Listing)) 
          : (<p className="text-sm italic font-thin">There are currently none to display</p>)}
        </div>
      </div>
    </Layout>
  )
}
