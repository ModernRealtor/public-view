import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import {AvailableListings} from "../components/availableListings"

// let metrics = [
//   {
//     value: 350,
//     unit: "+",
//     description: "houses sold"
//   },
//   {
//     value: 22,
//     unit: "+",
//     description: "years in the business"
//   },
//   {
//     value: 97,
//     unit: "%",
//     description: "client retention rate"
//   },
// ]


export default function Home() {
  return (
    <Layout>
        <Hero className="outer-layout bg-secondary text-primary"/>
        <AvailableListings className="outer-layout bg-half text-primary py-12"/>
        {/* <div className="h-64 outer-layout bg-primary text-secondary">
          <p>buy section</p>
          <p>No matter what kind of property you dream of, we will help make that dream a realty</p> 
          <p>Sell section</p>
          <p>Selling a property is a daunting task. We promise to help you get the best price, according to market value</p> 
        </div>
        <div className="h-64 outer-layout bg-secondary text-primary">
          <p>Why Choose us? Section</p>
           <p>list value offering to clients: knowledgeable, hardworking, industry network</p>
          <p>knowledgeable: realtor is essential for knowing market and value/etc. with XX years in business, we have the know how</p>
          <p>hardworking: Never rest until you're satisfied. Our client-centered approach will make you feel at ease in this competitive landscape</p>
          <p>industry network: gain access to top industry proffessionals that we've worked with throughout the years; such as attourneys, mortage brokers, inspectors, etc</p> 
          <h2>Reputation and Client Reviews Section</h2>
          <p>Our reputation says it all</p>
          <p>for ex: 100+ houses sold, 1000+ offers accepted, 10+ years in business, etc</p>
          <p>but dont just take our word, hear from our clients</p>
          <p>get from server. at first dummu values, but in future will get from google business reviews</p>
        </div> */}
    </Layout>
  )
}
