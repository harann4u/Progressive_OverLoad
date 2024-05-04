import React, { useRef } from 'react'

const RefConcept = () => {
    const inputref = useRef<HTMLInputElement|null>(null)
    const vlaueref = useRef(0)
    const pref = useRef<HTMLParagraphElement>(null);

    console.log("value",vlaueref.current++)
    const handleClick =()=>{
         console.log("Ref Value",inputref.current)
         if(pref.current){
            pref.current.textContent = "New Value"
         }
    }
  return (
    <div>
        <input ref = {inputref} type="text" placeholder='Type anything' />
        <button onClick={handleClick}>Submit</button>
        <p ref = {pref}>Inital Value</p>
    </div>
  )
}

export default RefConcept
