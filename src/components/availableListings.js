import React, {useState} from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import ListingCard from "../components/listingCard"


// export function ListingCarousel({subListings}){
//   let [idx, setIdx] = useState(0)
//   let Listings = subListings || GetListings()
//   if((Listings || []).length === 0) return <></>
//   return (
//     <div className="outer-layout ">
//       <div className="flex justify-between flex-wrap items-end mt-4 py-4">
//         <h2 className="text-2xl">Available Listings</h2>
//         <span className="text-xs font-thin">
//           Displaying 
//           <span className="px-1">
//             <span className={`inline-block tablet:hidden`}>1</span>
//             <span className={`hidden tablet:inline-block laptop:hidden`}>{Math.min(2, Listings.length)}</span>
//             <span className={`hidden laptop:inline-block desktop:hidden`}>{Math.min(3, Listings.length)}</span>
//             <span className={`hidden desktop:inline-block`}>{Math.min(4, Listings.length)}</span>
//           </span>
//           of {Listings.length} Listings
//         </span>
//       </div>
//       <div className="w-full relative pb-12 pt-6 desktop:pb-16 desktop:pt-12">
//         <div className={`py-4 overflow-y-hidden max-h-min flex flex-nowrap justify-items-center justify-evenly`}>
//           <div>
//             {Listings[idx%Listings.length]}
//           </div>
//           <div className={`${Listings.length >=2 ? "tablet:block" : ""} hidden`}>
//             {Listings[(idx+1)%Listings.length]}
//           </div>
//           <div className={`${Listings.length >=3 ? "laptop:block" : ""} hidden`}>
//             {Listings[(idx+2)%Listings.length]}
//           </div>
//           <div className={`${Listings.length >=4 ? "desktop:block" : ""} hidden`}>
//             {Listings[(idx+3)%Listings.length]}
//           </div>
//         </div>
//         <button 
//           className="absolute h-full text-9xl left-0 top-0 text-secondary-300 opacity-60 hover:opacity-100 transition-opacity"
//           aria-label="Previous Listings"
//           title="Previous"
//           onClick={()=>setIdx(idx-1)}
//         >
//           &#10092;
//         </button>
//         <button 
//           className="absolute h-full text-9xl right-0 top-0 text-secondary-300 opacity-60 hover:opacity-100 transition-opacity"
//           aria-label="Next Listings"
//           title="Next"
//           onClick={()=>setIdx(idx+1)}
//         >
//           &#10093;
//         </button>
//       </div>
//     </div>
//   )
// }

// export function GetListings(subListings){
//   let {allFile: {group}, 
//   cms: {curOrg: {listings}}
// } = useStaticQuery(query)
//   let listingData = {};
//   (subListings || listings)
//     .filter(({status}) => status === "A")
//     .forEach(listn => {
//       listingData[listn.ml_num] = {
//         numBath: listn.bath_tot,
//         numBed: `${listn.br || 0}${listn.br_plus? `+${listn.br_plus}` : ""}`,
//         sqft: listn.sqft,
//         addr: listn.disp_addr === "Y" ? listn.addr : listn.cross_st,
//         price: listn.lp_dol? listn.lp_dol.toLocaleString('en-US', {style: "currency", currency: "USD", maximumFractionDigits: 0}) : "",
//         status: listn.lsc,
//         mlNum: listn.ml_num
//       }
//     })
//   group.forEach(({nodes: [imgInfo]}) => {
//     if(listingData[imgInfo.relativeDirectory]){
//       listingData[imgInfo.relativeDirectory].img = imgInfo 
//     }
//   })
//   return  Object.keys(listingData)
//     .map((mlNum, i) => (
//       <ListingCard key={i} {...listingData[mlNum]} />
//     ))
// }

// export const query = graphql`
// {
//   cms {
//     curOrg {
//       listings {
//         status
//         lsc
//         lp_dol
//         ml_num
//         bath_tot
//         br
//         br_plus
//         sqft
//         disp_addr
//         addr
//         cross_st
//       }
//     }
//   }
//   allFile(filter: {sourceInstanceName: {eq: "listingImages"}}, sort: {fields: name}) {
//     group(field:relativeDirectory, limit:1){
//       nodes {
//         relativeDirectory
//         childImageSharp {
//           gatsbyImageData(placeholder: BLURRED)
//         }
//       }
//     }
//   }
// }
// `

export default function Temp() {
  <div>Temp</div>
}