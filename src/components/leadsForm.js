import React, {useState} from "react"
import { toast } from 'react-toastify';

import {HouseSelect} from "../assets/icons/undraw"
import {submitLeadForm} from "../services/gql-api"

let inputClass = "form-input mt-1 block w-full rounded-md border-secondary-400 focus:border-primary-500 focus:ring focus:ring-primary-300 focus:ring-opacity-25 placeholder:font-thin placeholder:opacity-75 "
let checkClass = "form-checkbox w-5 h-5 inline-block float-left mr-1 cursor-pointer checked:bg-primary-500 checked:focus:bg-primary-500 checked:focus:ring-1 checked:focus:ring-primary-500 hover:border-primary-500 checked:hover:bg-primary-500 checked:hover:ring checked:hover:ring-primary-300 checked:hover:ring-opacity-25"

let toastProps = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  }


let LeadForm = ({className, id}) => {
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
        toast.promise(submitLeadForm({name, email, tel, pref, comments, subscribe, clientPlans, propertyTypes}), {
            pending: "Submitting Information",
            success: "Submission successful 👍",
            error: "Submission failed 😨"
        }, toastProps)
        .then(() => resetForm())
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
    }

    let emailRequired = pref === "email";
    return (<section className={`${className} pt-12 pb-24`}>
        <div className="flex flex-col tablet:flex-row place-content-center laptop:place-content-around laptop:gap-4">
            <div className="flex-none flex-col-reverse justify-between gap-4 tablet:basis-2/5 desktop:basis-1/3 tablet:pr-12 tablet:flex">
                <div className="relative w-full overflow-hidden tablet:overflow-visible max-w-xs tablet:h-max" style={{height: "45vw", maxHeight: "11rem"}}>
                    <div className="absolute top-0 tablet:top-auto tablet:bottom-0">
                        <HouseSelect className="w-full h-auto"/>
                    </div>
                </div>
                <div className="pb-6">
                    <h2 className="text-primary-500 text-3xl font-semi pb-2 desktop:text-4xl relative">        
                        <span className="w-6 h-1 absolute -top-24 invisible" id={id}></span>
                        Ready to take the next step?
                    </h2>
                    <p>Fill out the form and we'll be happy to reach out</p>
                </div>
            </div>
            <div className="relative laptop:w-full">
                <form onSubmit={submitForm} className={`${loading? "cursor-wait animate-pulse" : ""}`}>
                    <fieldset className={`flex flex-col gap-2 desktop:gap-4 disabled:pointer-events-none`} disabled={loading}>
                        <div className="grid grid-cols-3 desktop:grid-flow-col gap-2">
                            <div className="col-span-3 desktop:col-span-1">
                                <span className="font-medium cursor-default">Interested In</span> <span className="text-gray-400 italic text-sm pl-2">Optional</span>
                                <div className="py-1 flex flex-wrap gap-x-6 justify-start">
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
                                <span className="font-medium cursor-default">Property Type</span> <span className="text-gray-400 italic text-sm pl-2">Optional</span>
                                <div className="py-1 flex flex-wrap gap-x-6 justify-start">
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
                                <div className="flex justify-between">
                                    <span className="font-medium">Additional Comments</span>
                                    <span className="text-gray-400 italic text-sm self-end">Optional</span>
                                </div>
                                <textarea value={comments} onChange={({target: {value}}) => setComments(value)} rows={4} className={`${inputClass} form-textarea`} placeholder="Anything extra you would like us to know?"/>
                            </label>
                        </div>
                        <label className="block">
                            <div className="flex justify-between">
                                <div>
                                    <span className="font-medium">Name</span>
                                    <span className="text-red-500 pl-1">*</span>
                                </div>
                                <span className="text-red-400 italic text-sm self-end">Required</span>
                            </div>
                            <input type="text" value={name} placeholder="e.g. John Smith" onChange={({target: {value}}) => setName(value)} className={`${inputClass}`} required/>
                        </label>
                        <div className="grid grid-cols-4 gap-2 desktop:gap-4">
                            <label className="block col-span-4 laptop:col-span-2">
                                <span className="font-medium">Preferred Contact Method</span>
                                <select value={pref} onChange={({target: {value}}) => setPref(value)} className={`${inputClass} form-select`}>
                                    <option value="email">Email</option>
                                    <option value="call">Phone Call</option>
                                    <option value="text">Text</option>
                                </select>
                            </label>
                            <label className="block col-span-4 laptop:col-span-2">
                                <div className="flex justify-between">
                                    <div>
                                        <span className="font-medium">Phone Number</span>
                                        <span className={`text-red-500 pl-1 ${emailRequired? "hidden" : ""}`}>*</span>
                                    </div>
                                    {!emailRequired? (
                                        <span className="text-red-400 italic text-sm self-end">Required</span>
                                    ) : (
                                        <span className="text-gray-400 italic text-sm self-end">Optional</span>
                                    )}
                                </div>
                                <input type="tel" value={tel} placeholder="e.g. (416) 666-6666" onChange={({target: {value}}) => setTel(value)} className={`${inputClass}`} required={!emailRequired}/>
                            </label>
                            <label className="block col-span-4">
                                <div className="flex justify-between">
                                    <div>
                                        <span className="font-medium">Email</span>
                                        <span className={`text-red-500 pl-1 ${emailRequired? "" : "hidden"}`}>*</span>
                                    </div>
                                    {emailRequired? (
                                        <span className="text-red-400 italic text-sm self-end">Required</span>
                                    ) : (
                                        <span className="text-gray-400 italic text-sm self-end">Optional</span>
                                    )}
                                </div>
                                <input type="email" value={email} placeholder="e.g. John.Smith@email.com" onChange={({target: {value}}) => setEmail(value)} className={`${inputClass}`} required={emailRequired}/>
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