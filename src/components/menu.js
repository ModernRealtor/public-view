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
        <div>
            <button className="w-11 h-11 border border-orange" 
                onClick={() => {
                    isOpen? enableScroll() : disableScroll()
                    setIsOpen(!isOpen)
                    }}>
                {isOpen? "Close" : "Open"}
            </button>
            <div className="w-screen h-screen fixed left-0 pt-6 bg-indigo-100">
                <button>Login</button>
                <button>Contact</button>
            </div>
        </div>
    )
}
