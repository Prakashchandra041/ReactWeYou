import { useState } from "react"
import { nanoid } from "nanoid";
export function TodoInput({handleList}) {
    const [text, setText] = useState("");

    function handleInput({target}) {
        setText(target.value)
    }
    function handleBtn() {
        const data = {  
            id:nanoid(4),
            text: text,
            status: false,  
        }
        handleList(data);
        setText("")
    } 

    return <>
        <input type="text" placeholder="Enter your list" value={text} onChange={handleInput}/>
        <button onClick={handleBtn}>Enter</button>
        </>
}