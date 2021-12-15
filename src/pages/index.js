import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import {ListingCard} from "../components/listing"

let metrics = [
  {
    value: 350,
    unit: "+",
    description: "houses sold"
  },
  {
    value: 22,
    unit: "+",
    description: "years in the business"
  },
  {
    value: 97,
    unit: "%",
    description: "client retention rate"
  },
]

let houses = [
  {
    address: "123 Fake Addr Lane, Toronto",
    numBed: 3,
    numBath: 2,
    size: 2000,
    price: 1200000,
    img: "house1.jpg"
  },
  {
    address: "44 McFake St., Guelph",
    numBed: 1,
    numBath: 1,
    size: 1400,
    price: 800000,
    img: "house2.jpg"
  },
  {
    address: "90 Faking Rd., London",
    numBed: 2,
    numBath: 2,
    size: 1800,
    price: 1340000,
    img: "house3.jpg"
  },
  {
    address: "1100 Address Fake., Toronto",
    numBed: 1,
    numBath: 1,
    size: 1000,
    price: 1000000,
    img: "house4.jpg"
  },
]


export default function Home() {
  return (
    <Layout>
        <Hero className="outer-layout bg-secondary text-primary"/>
        <div className="outer-layout bg-half text-primary py-12">
          <div className="uppercase text-xs">&#8212;&#8212; Available</div>
          <div className="flex justify-between mt-2 mb-20">
            <h2 className="font-semibold text-3xl">Available Listings</h2>
            <a href="#" className="text-sm">Explore All &rarr;</a>
          </div>
          <div className="flex justify-between">
            {houses.map((info, i) => (
              <ListingCard key={i} info={info}/>
            ))}
          </div>
        </div>
        <div className="h-96 outer-layout bg-primary text-secondary">
          <p>Why work with us?</p>
          <p>list value offering to clients: knowledgeable, hardworking, industry network</p>
          <p>knowledgeable: realtor is essential for knowing market and value/etc. with XX years in business, we have the know how</p>
          <p>hardworking: Never rest until you're satisfied. Our client-centered approach will make you feel at ease in this competitive landscape</p>
          <p>industry network: gain access to top industry proffessionals that we've worked with throughout the years; such as attourneys, mortage brokers, inspectors, etc</p>
        </div>
        <div className="h-96 outer-layout bg-secondary text-primary">
          <p>buy section</p>
          <p>No matter what kind of property you dream of, we will help make that dream a realty</p>
          <p>Sell section</p>
          <p>Selling a property is a daunting task. We promise to help you get the best price, according to market value</p>
        </div>
        <div className="h-96 outer-layout bg-primary text-secondary">
          <p>Our reputation says it all</p>
          <p>for ex: 100+ houses sold, 1000+ offers accepted, 10+ years in business, etc</p>
        </div>
        <div className="h-96 outer-layout bg-secondary text-primary">
          <p>but dont just take our word, hear from our clients</p>
          <p>get from server. at first dummu values, but in future will get from google business reviews</p>
        </div>
    </Layout>
  )
}
