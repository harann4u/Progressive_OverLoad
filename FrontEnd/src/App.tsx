import './App.css'
import DashBoard from './DashBoard/DashBoard'
import RefConcept from './Concept_implementations/RefConcept'
import { useState } from 'react'
import { DashBoardContext } from './GlobalContext/context'

export interface SampleData {
    Name:string,
    isBoolean:boolean
}

function App() { 
  const [user] = useState<SampleData>({
    Name:'Hariharan',
    isBoolean:true
  }) 
  return (
    <div>
       <DashBoardContext.Provider value = {user} >
           <DashBoard/>
       </DashBoardContext.Provider>
       
        {/* <RefConcept/> */}
    </div>
  )
}

export default App
