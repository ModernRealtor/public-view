import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {AvailableListings} from "../components/availableListings"
import { HouseSearching } from "../assets/icons/undraw"


let heroTitle = "Your next home is a click away."
let heroText = "Let us help you find the property of your dreams."

function Hero(props) {
  return (
    <div className={`${props.className}  py-16 text-secondary-900 tablet:py-24 laptop:py-32 desktop:py-48`}>
      <div className="flex flex-col tablet:flex-row gap-0 tablet:gap-12 place-items-center">
        <div className="py-5 tablet:pb-10 desktop:pt-0 text-center tablet:text-left desktop:text-right">
          <h1 className="text-primary-500 font-bold py-5 text-4xl capitalize laptop:text-5xl laptop:pb-10 desktop:text-6xl desktop:pb-14 desktop:pt-0">{heroTitle}</h1>
          <p className="py-4">{heroText}</p>
          <Link to="/about/" className=" primary-btn desktop:float-right">Learn More &rarr;</Link>
        </div>
        <HouseSearching className="w-full"/>
      </div>
    </div>
  )
}

export default function Home({location: {origin, pathname}}) {
  return (
    <Layout origin={origin} path={pathname} description={heroText}>
        <span id="ogImage"></span>
        <Hero className="outer-layout bg-secondary-50"/>
        <AvailableListings className="outer-layout text-primary py-12"/>
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
