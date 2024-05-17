import './App.css'
import AppRoutes from './routes'
import { GlobalContextProvider } from './data/context/globalcontext'
import { store } from './data/redux/store'
import { Provider } from 'react-redux'
import Appinitialize from './figma/appinitialize/appinitialize'

export interface SampleData {
    Name:string,
    isBoolean:boolean
}

function App() { 
  
  return (
    <div>
    
      <Provider store = {store}>
          <GlobalContextProvider>
            <Appinitialize>
                  <AppRoutes/>
             </Appinitialize>
          </GlobalContextProvider>
        </Provider>
   
      
     
    </div>
  )
}

export default App
