import React from "react"

import {HouseSelect} from "../assets/icons/undraw"
import {submitLeadForm} from "../services/gql-api"

let inputClass = "mt-1 block w-full rounded-md border-secondary-400 focus:border-primary-500 focus:ring focus:ring-primary-300 focus:ring-opacity-25 "

let LeadForm = ({className}) => {
    return (<div className={`${className}`}>
        <div className="flex flex-col gap-2">
            <div className="px-8"><HouseSelect className="w-full h-auto"/></div>
            <div>
                <h2 className="text-primary-500 text-3xl font-semi py-6">Ready to take the next step?</h2>
                <form onClick={()=> {submitLeadForm({hi: "sdfs"})}}>
                    {/* planning on: buying, selling, investing, leasing */}
                    {/* interested in: residential, commercial, other */}
                    {/* email, phone number, atleast one is required */}
                    {/* preferred method: calling, texting, email; whatever selected needs to be provided */}
                    {/* for calling specifically, preferred days/time; 2 text boxes w/ placeholder hints */}
                    {/* Additional comments: text area */}
                    {/* checkbox for email me real estate and brokerage news */}
                    <label className="block">
                        <span>Name</span>
                        <input name="name" type="text" className={`${inputClass}`} />
                    </label>
                </form>
            </div>
        </div>
    </div>)
}

export default LeadForm