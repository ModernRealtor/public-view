import React, {useState} from "react"

import {HouseSelect} from "../assets/icons/undraw"
import {submitLeadForm} from "../services/gql-api"

let inputClass = "mt-1 block w-full rounded-md border-secondary-400 focus:border-primary-500 focus:ring focus:ring-primary-300 focus:ring-opacity-25 placeholder:font-thin placeholder:opacity-75 "

let LeadForm = ({className}) => {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [tel, setTel] = useState("")
    let [pref, setPref] = useState("email")
    let [comments, setComments] = useState("")
    let [subscribe, setSubscribe] = useState(false)
    let [clientPlans, setClientPlans] = useState([])

    function resetForm(){
        setName("")
        setEmail("")
        setTel("")
        setPref("email")
        setComments("")
        setSubscribe(false)
    }

    async function submitForm(event){
        event.preventDefault();
        console.log("loading")
        await submitLeadForm({})
        resetForm()
        document.getElementById("f_output").textContent = "Form Submitted"
    }
    let emailRequired = pref === "email";
    return (<div className={`${className}`}>
        <div className="flex flex-col gap-2">
            <div className="px-8"><HouseSelect className="w-full h-auto"/></div>
            <div>
                <h2 className="text-primary-500 text-3xl font-semi py-6">Ready to take the next step?</h2>
                <form onSubmit={submitForm}>
                    {/* planning on: buying, selling, investing, leasing */}
                    {/* interested in: residential, commercial, other */}
                    <label className="block">
                        <span>Name</span><span className="text-red-500 pl-1">*</span>
                        <input type="text" value={name} placeholder="John Smith" onChange={({target: {value}}) => setName(value)} className={`${inputClass}`} required/>
                    </label>
                    <label className="block">
                        <span>Email</span><span className={`text-red-500 pl-1 ${emailRequired? "" : "hidden"}`}>*</span>
                        <input type="email" value={email} placeholder="John.Smith@email.com" onChange={({target: {value}}) => setEmail(value)} className={`${inputClass}`}/>
                    </label>
                    <label className="block">
                        <span>Tel Number</span><span className={`text-red-500 pl-1 ${emailRequired? "hidden" : ""}`}>*</span>
                        <input type="tel" value={tel} placeholder="(416) 666-6666" onChange={({target: {value}}) => setTel(value)} className={`${inputClass}`}/>
                    </label>
                    <label className="block">
                        <span>Preferred Contact Method</span>
                        <select value={pref} onChange={({target: {value}}) => setPref(value)} className={`${inputClass} form-select`}>
                            <option value="email">Email</option>
                            <option value="call">Phone Call</option>
                            <option value="text">Text</option>
                        </select>
                    </label>
                    <label className="block">
                        <span>Additional Comments</span>
                        <textarea value={comments} onChange={({target: {value}}) => setComments(value)} rows={3} className={`${inputClass} form-textarea`} placeholder="Anything extra you would like us to know?"/>
                    </label>
                    <label className="block">
                        <input type="checkbox" checked={subscribe} onChange={({target: {value}}) => setSubscribe(value)} className={`${inputClass} form-checkbox float-left w-5 h-5 inline-block mb-1 mr-2`}/>
                        <span className="align-middle ">Subscribe to Brokerage and Real Estate News</span>
                    </label>
                    <input type="Submit" className="primary-btn w-full" />
                </form>
            </div>
        </div>
    </div>)
}

export default LeadForm