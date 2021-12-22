import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {ListingCard} from "../components/listingCard"

const defaultInfo = {
    address: "123 Fake Addr Lane, Toronto",
    numBed: 3,
    numBath: 2,
    size: 2000,
    price: 1200000,
}

export function AvailableListings(){
    let {cms, allFile} = useStaticQuery(graphql`
    query {
        cms {
            org {
                listings {
                    listings {
                        ml_num
                    }
                }
            }
        }
        allFile(
            filter: {sourceInstanceName: {eq:"listingImages"}}
            sort: {fields: name}
        ) {
            group(field: fields___mlsNum){
                edges {
                    node {
                      fields {
                          mlsNum
                      }
                      childImageSharp {
                          gatsbyImageData(
                              placeholder: BLURRED
                          )
                      }
                    }
                }
            }
        }
    }`)
    let listings = cms.org?.listings?.listings
    // Convert mlnum grouping list of images to a dictionary
    let mlImages = {}
    allFile?.group?.forEach(listing => {
        // Iterate over listings (images are grouped by it)
        // Each "listing" instance will have an "edges" array. Should never be empty
        let mlsNum = listing.edges[0]?.node.fields.mlsNum
        mlImages[mlsNum] = listing.edges.map(({node}) => node)
    })
    return (<>
        {listings.map(({ml_num}, i) => (<ListingCard key={i} info={defaultInfo} image={mlImages[ml_num][0]} />))}
    </>)
}