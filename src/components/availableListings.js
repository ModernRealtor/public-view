import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ListingCard from "../components/listingCard"


export default function GetListings(){
  let {allFile: {group}, 
  cms: {curOrg: {listings}}
} = useStaticQuery(query)
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
  return  Object.keys(listingData)
    .map((mlNum, i) => (
      <ListingCard key={i} {...listingData[mlNum]} />
    ))
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
