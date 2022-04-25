import React, {useState} from "react"

import {HouseSelect} from "../assets/icons/undraw"
import {submitLeadForm} from "../services/gql-api"

let inputClass = "mt-1 block w-full rounded-md border-secondary-400 focus:border-primary-500 focus:ring focus:ring-primary-300 focus:ring-opacity-25 "

let LeadForm = ({className}) => {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [tel, setTel] = useState("")
    let [pref, setPref] = useState("email")

    function validateForm(){
        let output = document.getElementById("f_output")

        if(email === "" && tel === ""){
            output.textContent = "Please provide email or telephone number."
            output.classList.toggle("text-red-500")
            return false
        }
        if(pref === "email" && email === ""){
            output.textContent = "Contact method requires an email address."
            output.classList.toggle("text-red-500")
            return false
        }

        if(["call", "text"].includes(pref) && tel === ""){
            output.textContent = "Contact method requires a phone number."
            output.classList.toggle("text-red-500")
            return false
        }

        return true
    }

    async function submitForm(event){
        event.preventDefault();
        let output = document.getElementById("f_output")
        output.classList.remove("text-red-500")
        output.textContent = ""
        if(!validateForm()) return;
        console.log("loading")
        await submitLeadForm({})
        console.log("done")
        document.getElementById("f_output").textContent = "Form Submitted"
    }
    return (<div className={`${className}`}>
        <div className="flex flex-col gap-2">
            <div className="px-8"><HouseSelect className="w-full h-auto"/></div>
            <div>
                <h2 className="text-primary-500 text-3xl font-semi pt-6">Ready to take the next step?</h2>
                <div id="f_output" className="w-full h-6 m-0 text-center text-sm font-thin text-green-600"></div>
                <form onSubmit={submitForm}>
                    {/* planning on: buying, selling, investing, leasing */}
                    {/* interested in: residential, commercial, other */}
                    {/* Additional comments: text area */}
                    {/* checkbox for email me real estate and brokerage news */}
                    <label className="block">
                        <span>Name</span>
                        <input name="name" type="text" value={name}  onChange={({target: {value}}) => setName(value)} className={`${inputClass}`} required/>
                    </label>
                    <label className="block">
                        <span>Email</span>
                        <input name="email" type="email" value={email} onChange={({target: {value}}) => setEmail(value)} className={`${inputClass}`}/>
                    </label>
                    <label className="block">
                        <span>Tel Number</span>
                        <input name="tel" type="tel" value={tel} onChange={({target: {value}}) => setTel(value)} className={`${inputClass}`}/>
                    </label>
                    <label className="block">
                        <span>Preferred Contact Method</span>
                        <select name="pref" value={pref} onChange={({target: {value}}) => setPref(value)} className={`${inputClass} form-select`}>
                            <option value="email">Email</option>
                            <option value="call">Phone Call</option>
                            <option value="text">Text</option>
                        </select>
                    </label>
                    <input type="Submit" />
                </form>
            </div>
        </div>
    </div>)
}

export default LeadForm