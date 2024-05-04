import React, { useRef } from 'react'

const RefConcept = () => {
    const inputref = useRef<HTMLInputElement|null>(null)
    const vlaueref = useRef<number>(10)
    const pref = useRef<HTMLParagraphElement>(null);

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
        <p>{vlaueref.current}</p>
    </div>
  )
}

export default RefConcept
