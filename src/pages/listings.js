import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ListingCard from "../components/listingCard"

export default function Listings({ location: { pathname }, data }) {
  let {allFile: {group}, cms: {curOrg: {listings}}} = data
  let listingData = {}
  listings
    .filter(({status}) => status === "A")
    .forEach(listn => {
      listingData[listn.ml_num] = {
        numBath: listn.bath_tot,
        numBed: `${listn.br || 0}${listn.br_plus? `+${listn.br_plus}` : ""}`,
        sqft: listn.sqft,
        addr: listn.disp_addr === "Y" ? listn.addr : listn.cross_st,
        price: listn.lp_dol? listn.lp_dol.toLocaleString('en-US', {style: "currency", currency: "USD", maximumFractionDigits: 0}) : "",
        status: listn.lsc,
        mlNum: listn.ml_num
      }
    })
  group.forEach(({nodes: [imgInfo]}) => {
    listingData[imgInfo.relativeDirectory].img = imgInfo 
  })
  return (
    <Layout path={pathname} title="Browse Listings">
      <div className="outer-layout">
        <h1 className="text-4xl font-medium text-primary-500 py-10">
          Available Listings
        </h1>
        <h2 className="capitalize text-secondary-600 w-full pb-2">
          <div className="flex flex-wrap justify-between items-end">
            <span>Brokerage's Featured Listings</span>
            <span className="text-xs font-thin">Displaying {Object.keys(listingData).length} item(s)</span>
          </div> 
          <span className="w-full block border-b"></span>
        </h2>
        <div className="py-4 flex flex-wrap justify-evenly gap-8">
          {Object.keys(listingData).length > 0 ? (Object.keys(listingData).map((mlNum, i) => (
            <ListingCard key={i} {...listingData[mlNum]} />
          ))) : (<p className="text-sm italic font-thin">There are currently none to display</p>)}
        </div>
      </div>
    </Layout>
  )
}


export const query = graphql`
{
  cms {
    curOrg {
      listings {
        status
        lsc
        lp_dol
        ml_num
        bath_tot
        br
        br_plus
        sqft
        disp_addr
        addr
        cross_st
      }
    }
  }
  allFile(filter: {sourceInstanceName: {eq: "listingImages"}}, sort: {fields: name}) {
    group(field:relativeDirectory, limit:1){
      nodes {
        relativeDirectory
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
}
`
