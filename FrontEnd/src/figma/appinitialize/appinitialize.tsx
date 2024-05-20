import  { useEffect ,useContext, useState} from 'react'
import axios from 'axios'
import { GlobalContent } from '../../data/context/globalcontext'
import { Endpoints } from '../../helper/endpoint'
import { useLocalstorage } from '../../helper/localStorage/useLocalstorage'
import { overAllDatareducer } from '../../data/redux/slice/overalldataslice'
import { useDispatch } from 'react-redux'

const Appinitialize = ({children}:any) => {
  const {setLocalStorageState,overAllData} = useContext(GlobalContent)
  const {   getLocalStorageItem  } = useLocalstorage('ActivityPageData') 
  const dispatch = useDispatch()
  const fetchData = async () => {
        const response =  await axios.get(Endpoints.ExerciseFullList)
        console.log('response.data',response.data)
        overAllData.current  = response.data // putting Data in global Context
        dispatch(overAllDatareducer(response.data)) // putting data in Store.
   }
   const fetchLocalStorage = ()=>{
    let Exercise:string[] =  getLocalStorageItem();
    Exercise?.length ?  setLocalStorageState(Exercise) :  setLocalStorageState([])
  }
    useEffect(()=>{
      fetchData()
      fetchLocalStorage()
    },[])

  return (
    <div>
      {children}
    </div>
  )
}

export default Appinitialize
