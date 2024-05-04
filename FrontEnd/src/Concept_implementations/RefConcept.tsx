import React, { useRef } from 'react'

const RefConcept = () => {
    const inputref = useRef<HTMLInputElement| null>(null)
    const vlaueref = useRef(0)
    console.log("value",vlaueref.current++)
    const handleClick =()=>{
         console.log("Ref Value",inputref.current?.value)
    }
  return (
    <div>
        <input ref = {inputref} type="text" placeholder='Type anything' />
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default RefConcept
