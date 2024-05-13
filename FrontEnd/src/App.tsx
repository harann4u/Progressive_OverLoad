import './App.css'
import AppRoutes from './routes'
import { GlobalContextProvider } from './data/context/globalcontext'

export interface SampleData {
    Name:string,
    isBoolean:boolean
}

function App() { 
  
  return (
    <div>
      <GlobalContextProvider>
           <AppRoutes/>
      </GlobalContextProvider>
    </div>
  )
}

export default App
