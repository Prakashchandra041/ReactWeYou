import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

export function Third() {
    const {state,handleChange}=useContext(AppContext)
    return <>
        <div>
            State is :{state}
            <br />
            <button
                onClick={() => {
                    handleChange("Hello")
            }}
            >change context</button>
        </div>
        </>
}