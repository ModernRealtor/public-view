import React, {useState} from "react"

import {HouseSelect} from "../assets/icons/undraw"
import {submitLeadForm} from "../services/gql-api"

let inputClass = "form-input mt-1 block w-full rounded-md border-secondary-400 focus:border-primary-500 focus:ring focus:ring-primary-300 focus:ring-opacity-25 placeholder:font-thin placeholder:opacity-75 "
let checkClass = "form-checkbox w-5 h-5 inline-block float-left mr-1 cursor-pointer checked:bg-primary-500 checked:focus:bg-primary-500 checked:focus:ring-1 checked:focus:ring-primary-500 hover:border-primary-500 checked:hover:bg-primary-500 checked:hover:ring checked:hover:ring-primary-300 checked:hover:ring-opacity-25"


let LeadForm = ({className}) => {
    let [loading, setLoading] = useState(false)
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [tel, setTel] = useState("")
    let [pref, setPref] = useState("email")
    let [comments, setComments] = useState("")
    let [subscribe, setSubscribe] = useState(false)
    let [clientPlans, setClientPlans] = useState({"buying": false, "selling": false, "investing": false, "leasing": false})
    let [propertyTypes, setPropertyTypes] = useState({"residential": false, "commercial": false})

    function resetForm(){
        setName("")
        setEmail("")
        setTel("")
        setPref("email")
        setComments("")
        setSubscribe(false)
        setClientPlans({"buying": false, "selling": false, "investing": false, "leasing": false})
        setPropertyTypes({"residential": false, "commercial": false})
    }

    async function submitForm(event){
        event.preventDefault();
        setLoading(true)
        try{
            await submitLeadForm({name, email, tel, pref, comments, subscribe, clientPlans, propertyTypes})
            resetForm()
        }catch(err){
            console.log(err)
        }finally {
            setLoading(false)
        }
    }

    let emailRequired = pref === "email";
    return (<section className={`${className}`}>
        <div className="flex flex-col tablet:flex-row place-content-center laptop:place-content-around laptop:gap-4">
            <div className="flex-none flex-col-reverse justify-between gap-4 tablet:basis-2/5 desktop:basis-1/3 tablet:pr-12 tablet:flex">
                <div className="relative w-full overflow-clip tablet:overflow-visible max-w-xs tablet:h-max" style={{height: "45vw", maxHeight: "11rem"}}>
                    <div className="absolute top-0 tablet:top-auto tablet:bottom-0">
                        <HouseSelect className="w-full h-fit"/>
                    </div>
                </div>
                <h2 className="text-primary-500 text-3xl font-semi pb-6 desktop:text-4xl">Ready to take the next step?</h2>
            </div>
            <div className="relative laptop:w-full">
                <form onSubmit={submitForm} className={`${loading? "cursor-wait animate-pulse" : ""}`}>
                    <fieldset className={`flex flex-col gap-2 desktop:gap-4 disabled:pointer-events-none`} disabled={loading}>
                        <div className="grid grid-cols-3 desktop:grid-flow-col gap-2">
                            <div className="col-span-3 desktop:col-span-1">
                                <span className="font-medium cursor-default">Interested In</span>
                                <div className="flex flex-wrap gap-x-6 justify-start">
                                    {Object.keys(clientPlans).map((type, i) => (
                                    <label key={i} className="cursor-pointer">
                                        <input type="checkbox" value={type} checked={clientPlans[type]} onChange={({target: {value, checked}}) => {
                                            let newState = Object.assign({}, clientPlans)
                                            newState[value] = (checked === true)
                                            setClientPlans(newState)
                                        }} className={`${inputClass} ${checkClass}`}/>
                                        <span className="capitalize align-middle">{type}</span>
                                    </label>
                                    ))}
                                </div>                        
                            </div>
                            <div className="col-span-3 desktop:col-span-1">
                                <span className="font-medium cursor-default">Property Type</span>
                                <div className="flex flex-wrap gap-x-6 justify-start">
                                    {Object.keys(propertyTypes).map((type, i) => (
                                    <label key={i} className="cursor-pointer">
                                        <input type="checkbox" value={type} checked={propertyTypes[type]} onChange={({target: {value, checked}}) => {
                                            let newState = Object.assign({}, propertyTypes)
                                            newState[value] = (checked === true)
                                            setPropertyTypes(newState)
                                        }} className={`${inputClass} ${checkClass}`}/>
                                        <span className="capitalize align-middle">{type}</span>
                                    </label>
                                    ))}
                                </div>                        
                            </div>
                            <label className="block col-span-3 desktop:row-span-2 desktop:col-span-2">
                                <span className="font-medium">Additional Comments</span>
                                <textarea value={comments} onChange={({target: {value}}) => setComments(value)} rows={4} className={`${inputClass} form-textarea`} placeholder="Anything extra you would like us to know?"/>
                            </label>
                        </div>
                        <label className="block">
                            <span className="font-medium">Name</span><span className="text-red-500 pl-1">*</span>
                            <input type="text" value={name} placeholder="e.g. John Smith" onChange={({target: {value}}) => setName(value)} className={`${inputClass}`} required/>
                        </label>
                        <div className="grid grid-cols-4 gap-2 desktop:gap-4">
                            <label className="block col-span-4">
                                <span className="font-medium">Email</span><span className={`text-red-500 pl-1 ${emailRequired? "" : "hidden"}`}>*</span>
                                <input type="email" value={email} placeholder="e.g. John.Smith@email.com" onChange={({target: {value}}) => setEmail(value)} className={`${inputClass}`} required={emailRequired}/>
                            </label>
                            <label className="block col-span-4 laptop:col-span-2">
                                <span className="font-medium">Phone Number</span><span className={`text-red-500 pl-1 ${emailRequired? "hidden" : ""}`}>*</span>
                                <input type="tel" value={tel} placeholder="e.g. (416) 666-6666" onChange={({target: {value}}) => setTel(value)} className={`${inputClass}`} required={!emailRequired}/>
                            </label>
                            <label className="block col-span-4 laptop:col-span-2">
                                <span className="font-medium">Preferred Contact Method</span>
                                <select value={pref} onChange={({target: {value}}) => setPref(value)} className={`${inputClass} form-select`}>
                                    <option value="email">Email</option>
                                    <option value="call">Phone Call</option>
                                    <option value="text">Text</option>
                                </select>
                            </label>
                        </div>
                        <label className="block cursor-pointer">
                            <input type="checkbox" checked={subscribe} onChange={({target: {checked}}) => setSubscribe(checked)} className={`${inputClass} ${checkClass} mb-1 mr-2`}/>
                            <span className="align-middle ">Subscribe to Brokerage and Real Estate News</span>
                        </label>
                        <input type="Submit" value="Submit" onChange={()=>{}} className="primary-btn w-full mt-6" />
                    </fieldset>
                </form>
            </div>
        </div>
    </section>)
}

export default LeadForm