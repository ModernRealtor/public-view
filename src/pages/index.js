import React, {useState} from "react"

import Layout from "../components/layout"
import AvailableListings from "../components/availableListings"
import { HouseSearching } from "../assets/icons/undraw"
import { InternalLink } from "../components/gaLink"
import LeadForm from "../components/leadsForm"

let heroTitle = "Your next home is a click away."
let heroText = "Let us help you find the property of your dreams."
let heroBtnTxt = "Get Started"

function Hero(props) {
  return (
    <div
      className={`${props.className}  pt-12 pb-0 text-secondary-900 tablet:pb-24 laptop:pb-32 desktop:pb-48 desktop:pt-28`}
    >
      <div className="tablet:flex-row tablet:gap-12 place-items-center flex flex-col gap-0">
        <div className="tablet:pb-10 desktop:pt-0 tablet:text-left desktop:text-right py-5 text-center">
          <h1 className="text-primary-500 laptop:text-5xl laptop:pb-10 desktop:text-6xl desktop:pb-14 desktop:pt-0 py-5 text-4xl font-bold capitalize">
            {heroTitle}
          </h1>
          <p className="py-4">{heroText}</p>
          <InternalLink
            to="#leadForm"
            className=" primary-btn desktop:float-right"
            label={heroBtnTxt}
            tag="Hero Button"
          >
            {heroBtnTxt} &rarr;
          </InternalLink>
        </div>
        <HouseSearching className="w-full" />
      </div>
    </div>
  )
}

function Listings(){
  let Listings = AvailableListings()
  let [idx, setIdx] = useState(0)
  if((Listings || []).length === 0) return <></>
  Listings = Listings.concat(...Listings).concat(...Listings).concat(...Listings).concat(...Listings)
  return (
  <div className="outer-layout mb-8">
    <div className="flex justify-between items-end">
      <span className="text-xs uppercase">&#8212;&#8212; Available</span>
      <InternalLink
        to="/listings/"
        className="text-sm font-semibold"
        label="Explore All"
        tag="Home > Listings > Explore all"
      >
        Explore All &rarr;
      </InternalLink>
    </div>
    <div className="flex justify-between flex-wrap items-end mt-4 py-4 bg-secondary-900 text-secondary-50">
      <h2 className="text-2xl">Available Listings</h2>
      <span className="text-xs font-thin">
        Displaying 
        <span className="px-1">
          <span className={`tablet:hidden`}>1</span>
          <span className={`hidden ${Listings.length<2? "" : "tablet:inline-block"} laptop:hidden`}>2</span>
          <span className={`hidden ${Listings.length<3? "" : "laptop:inline-block"} desktop:hidden`}>3</span>
          <span className={`hidden ${Listings.length<4? "" : "desktop:inline-block"}`}>4</span>
        </span>
        of {Listings.length} listings
      </span>
    </div>
    <div className="w-full relative bg-secondary-900 pb-12 pt-6">
      <div className={`py-4 overflow-y-hidden max-h-min flex flex-nowrap justify-items-center justify-evenly`}>
        <div>
          {Listings[idx%Listings.length]}
        </div>
        <div className={`${Listings.length >=2 ? "tablet:block" : ""} hidden`}>
          {Listings[(idx+1)%Listings.length]}
        </div>
        <div className={`${Listings.length >=3 ? "laptop:block" : ""} hidden`}>
          {Listings[(idx+2)%Listings.length]}
        </div>
        <div className={`${Listings.length >=4 ? "desktop:block" : ""} hidden`}>
          {Listings[(idx+3)%Listings.length]}
        </div>
      </div>
      <button 
        className="absolute h-full text-9xl left-0 top-0 text-secondary-300 opacity-60 hover:opacity-100 transition-opacity"
        aria-label="Previous Listings"
        title="Previous"
        onClick={()=>setIdx(idx-1)}
      >
        &#10092;
      </button>
      <button 
        className="absolute h-full text-9xl right-0 top-0 text-secondary-300 opacity-60 hover:opacity-100 transition-opacity"
        aria-label="Next Listings"
        title="Next"
        onClick={()=>setIdx(idx+1)}
      >
        &#10093;
      </button>
    </div>
  </div>)
}

export default function Home({ location: { pathname } }) {
  return (
    <Layout path={pathname}>
      <Hero className="outer-layout bg-secondary-50" />
      <Listings/>
      <LeadForm className="outer-layout bg-secondary-50" id="leadForm" />
      {/* <div className="outer-layout bg-primary text-secondary h-64">
          <p>buy section</p>
          <p>No matter what kind of property you dream of, we will help make that dream a realty</p> 
          <p>Sell section</p>
          <p>Selling a property is a daunting task. We promise to help you get the best price, according to market value</p> 
        </div>
        <div className="outer-layout bg-secondary text-primary h-64">
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
