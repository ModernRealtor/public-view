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

export function AvailableListings(props){
    let {cms, allFile} = useStaticQuery(graphql`
    query {
        cms {
            org {
                listings {
                    listings {
                        edges {
                            node {
                                ml_num
                            }
                        }
                    }
                }
            }
        }
        allFile(filter: {sourceInstanceName: {eq:"listingImages"}}) {
            nodes {
                name
                childImageSharp {
                    gatsbyImageData(
                        placeholder: BLURRED
                    )
                }
            }
        }
    }`)
    let listings = cms.org?.listings?.listings?.edges
    if(listings.length === 0){
        return <></>
    }

    // Convert mlnum grouping list of images to a dictionary
    let mlImages = {}
    allFile?.nodes?.forEach(imgNode => {
        // name is either MLSNUM or MLSNUM_# 
        let idx = imgNode.name.lastIndexOf("_")
        let mlsNum = (idx === -1) ? imgNode.name : imgNode.name.slice(0, idx-1)
        if(!mlImages[mlsNum]) mlImages[mlsNum] = []
        mlImages[mlsNum].push(imgNode)
    })
    let thresh = 3
    return (
    <div className={props.className}>
        <div className="uppercase text-xs">&#8212;&#8212; Available</div>
        <div className="flex justify-between mt-2 mb-20">
        <h2 className="font-semibold text-3xl">Available Listings</h2>
        <a href="#" className="text-sm">Explore All &rarr;</a>
        </div>
        <div className={`flex w-full gap-5 ${(listings.length>thresh)? "flex-col" : "flex-row"}`}>
            <div className={`flex justify-between ${(listings.length>thresh)? "w-full" : "w-1/2"}`}>
                {listings.map(({node: {ml_num}}, i) => (<ListingCard key={i} info={defaultInfo} image={mlImages[ml_num][0]} />))}
            </div>
            <div className={`text-secondary ${(listings.length>thresh)? "w-full" : "w-1/2 self-end"}`}>
                Extra text about the available listings
            </div>
        </div>
    </div>)
}