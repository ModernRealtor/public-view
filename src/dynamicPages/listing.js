import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function Listing({
  pageContext,
  data,
  location: { pathname },
}) {
  let {listing, mlNum} = pageContext
  console.log(data.allFile)
  let images = data.allFile?.nodes.map(img => getImage(img))
  return (
    <Layout title={`Listing ${mlNum}`} path={pathname}>
      <div className="outer-layout tablet:py-16 laptop:py-20 py-10">
        <h2 className="text-primary-500 py-8 text-4xl font-semibold">temp</h2>
        <div className="laptop:flex-row laptop:gap-24 desktop:gap-28 flex flex-col gap-16 py-8">
          {/* <div className="place-items-center tablet:place-content-around tablet:flex-row laptop:flex-col laptop:place-content-start flex flex-col flex-shrink-0 gap-10">
            <GatsbyImage
              image={image}
              alt={`${name}'s Headshot`}
              className=" rounded-b-full"
            />
          </div> */}

          <div className="laptop:gap-12 flex flex-col gap-6 py-8">
            <div>
              <h3 className="text-lg font-medium">temp</h3>
            </div>
            <div className="text-justify whitespace-pre-wrap">temp</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ListingImages($mlNum: String) {
    allFile(filter: {dir: { eq: $mlNum }, sourceInstanceName: {eq: "listingImages"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`
