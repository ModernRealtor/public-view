import React from "react"

import {HouseSelect} from "../assets/icons/undraw"

let LeadForm = ({className}) => {
    return (<div className={`${className} flex`}>
        <div className=""><HouseSelect className="w-full"/></div>
        <div>
            <h2>Ready to take the next step?</h2>
            <form>
                <input name="lol" value="hi"/>
            </form>
        </div>
    </div>)
}

export default LeadForm