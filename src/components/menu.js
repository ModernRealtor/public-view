import React, {useState} from "react"

function disableScroll(){
    document.body.setAttribute("style", "overflow: hidden;");
}

function enableScroll(){
    document.body.setAttribute("style", "overflow: auto;");
}

export default function Menu(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`flex flex-row-reverse ${props.className}`}>
            <button className="w-11 h-11 tablet:hidden border border-orange" 
                onClick={() => {
                    isOpen? enableScroll() : disableScroll()
                    setIsOpen(!isOpen)
                    }}>
                {isOpen? "Close" : "Open"}
            </button>
            <div className="bg-indigo-100 w-screen h-screen fixed flex-grow flex-col-reverse flex-wrap left-0 mt-11 pt-5 tablet:w-auto tablet:h-auto tablet:m-0 tablet:p-0 tablet:flex tablet:static tablet:flex-row-reverse tablet:flex-nowrap tablet:justify-around isolate">
                <button className="border border-yellow-700 w-full tablet:w-auto" >Contact</button>
                <button className="border border-yellow-700 w-full tablet:w-auto" >Login</button>
            </div>
        </div>
    )
}
