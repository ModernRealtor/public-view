import React, {useState} from "react"
import { toast } from 'react-toastify';
import {XIcon} from "@heroicons/react/solid"

import {submitListingInquiry} from "../services/gql-api"

let inputClass = "form-input block w-full rounded-md border-secondary-400 focus:border-primary-500 focus:ring focus:ring-primary-300 focus:ring-opacity-25 placeholder:font-thin placeholder:opacity-75 "

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


export let InquiryForm = ({className, mlNum, addr, closeForm}) => {
    let initMessage = `Hello,\n\nI was hoping to get more information on listing ${mlNum} located at ${addr}.\n\n Thanks!`;
    let [loading, setLoading] = useState(false)
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [tel, setTel] = useState("")
    let [pref, setPref] = useState("email")
    let [message, setMessage] = useState(initMessage)

    function resetForm(){
        setName("")
        setEmail("")
        setTel("")
        setPref("email")
        setMessage(initMessage)
        closeForm()
    }

    async function submitForm(event){
        console.log("here")
        event.preventDefault();
        setLoading(true)
        toast.promise(submitListingInquiry({name, email, tel, pref, message, mlNum}), {
            pending: "Submitting Inquiry",
            success: "Inquiry successful 👍",
            error: "Submission failed 😨"
        }, toastProps)
        .then(() => resetForm())
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
    }

    let emailRequired = pref === "email";
    return (<section className={`${className} py-4 px-8 desktop:px-10 laptop:max-w-lg desktop:max-w-2xl laptop:h-fit`}>
    <div className="pt-4 w-full absolute right-0 top-0 flex justify-end">
        <button
            aria-label="Close form"
            title="Close form"
            onClick={()=>resetForm()}
        >
            <XIcon className="w-5 h-5"/>
        </button>
    </div>
    <div className="flex place-content-between place-items-end my-6 flex-wrap">
        <h1 className="text-3xl ">Listing Inquiry</h1>
        <p className="font-thin">MLS#{mlNum}</p>
    </div>
    <form onSubmit={submitForm} className={`${loading? "cursor-wait animate-pulse" : ""}`}>
        <fieldset className={`flex flex-col gap-1.5 disabled:pointer-events-none`} disabled={loading}>
            <label className="block">
                <div className="flex justify-between">
                    <div>
                        <span className="font-semibold text-sm">Name</span>
                        <span className="text-red-500 pl-1">*</span>
                    </div>
                    <span className="text-red-400 italic text-sm self-end">Required</span>
                </div>
                <input type="text" value={name} placeholder="e.g. John Smith" onChange={({target: {value}}) => setName(value)} className={`${inputClass}`} required/>
            </label>
            <div className="grid grid-cols-4 gap-2 desktop:gap-4">
                <label className="block col-span-4 laptop:col-span-2">
                    <span className="font-semibold text-sm">Preferred Contact Method</span>
                    <select value={pref} onChange={({target: {value}}) => setPref(value)} className={`${inputClass} form-select`}>
                        <option value="email">Email</option>
                        <option value="call">Phone Call</option>
                        <option value="text">Text</option>
                    </select>
                </label>
                <label className="block col-span-4 laptop:col-span-2">
                    <div className="flex justify-between">
                        <div>
                            <span className="font-semibold text-sm">Phone Number</span>
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
                            <span className="font-semibold text-sm">Email</span>
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
            <div className="grid grid-cols-3 desktop:grid-flow-col gap-2">
                <label className="block col-span-3 desktop:row-span-2">
                    <div className="flex justify-between">
                        <span className="font-semibold text-sm">Message</span>
                        <span className="text-red-400 italic text-sm self-end">Required</span>
                    </div>
                    <textarea value={message} onChange={({target: {value}}) => setMessage(value)} rows={7} className={`${inputClass} form-textarea`} placeholder="Listing Inquiry Message. For Ex: Hello, I am interested in..." required/>
                </label>
            </div>
            <div className="mt-2 flex flex-row-reverse place-content-between">
                <input type="Submit" value="Submit" onChange={()=>{}} className="primary-btn px-8" />
                <button onClick={() => resetForm()} className="secondary-btn" formnovalidate>
                    Cancel
                </button>
            </div>
        </fieldset>
    </form>
</section>)}

let InquiryContainer = ({mlNum, addr}) => {
    let [isOpen, setIsOpen] = useState(false)

    function toggleOpen(){
        document.body.classList.toggle("!overflow-hidden")
        setIsOpen(!isOpen)
    }

    return (<div className="relative">
    <div className={`${isOpen? "" : "hidden"} fixed z-30 w-screen h-screen bg-gray-900 bg-opacity-30 top-0 left-0`}>
        <InquiryForm mlNum={mlNum} addr={addr} className="absolute bg-secondary-50 w-screen h-screen top-0 left-0 laptop:left-[50%] laptop:top-[50%] laptop:-translate-y-1/2 laptop:-translate-x-1/2 outer-layout" closeForm={()=> toggleOpen()} />
    </div>
    <button 
        className="primary-btn w-full" 
        onClick={() => toggleOpen()}
        aria-label="Inquire about this listing"
    >Send Inquiry</button>
</div>)}

export default InquiryContainer