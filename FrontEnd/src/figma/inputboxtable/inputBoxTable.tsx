import React, { useEffect, useState } from 'react'
import './inpputboxtable.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { RootState } from '../../data/redux/store';
import {userDataInputReducer} from '../../data/redux/slice/inputpageBoxSlice'
import { useDispatch, useSelector } from 'react-redux';


interface TableProps  {
    rowCount :number,
    GetDataFromInput:(arg:formreduxData[])=> void,
    selectExercise:string,
    ExId:number
}
interface formreduxData{
    set:number,
    kg:number,
    rep:number,
    done:boolean,
}
interface OverallformData{
    Id:number,
    details:formreduxData[]
    Date:string,
    ExerciseName:string,
    MuscleName:string,
    ToolName:string
}

const InputBoxTable = ({rowCount,GetDataFromInput,selectExercise,ExId}:TableProps) => {

    const dispatch = useDispatch()
    // const [isChecked,setIsChecked] = useState(false)
    const inputUserData = useSelector((state:RootState)=>state.userInputPage)

    let newFormData:formreduxData[]
    const [formData,setformData] = useState<formreduxData[]>([])

    

     const handleChange = (e:any,index:number)=>{
            const {name,value } = e.target
            newFormData = formData.map((item,idx)=> 
            idx === index ? {...item,[name]:value}:item
            );
            setformData(newFormData)
     }
    const handleCheckBox = (e:any,index:number) => {
        const {name } = e.target
        const value = e.target.checked
        newFormData = formData.map((item,idx)=> 
                idx === index ? {...item,[name]:value,set:index+1}:item
        );
        setformData(newFormData)
        GetDataFromInput(newFormData)
    }

    useEffect(()=>{
        if(inputUserData.userInputData.length != 0){
                const retData = inputUserData.userInputData.filter((el)=>el.Id === ExId)
                if(retData && retData[0].details.length > 1 ){
                        setformData(retData[0].details)   
                     } else{
                        const newRowData = { 
                            set:0,
                            kg:0,
                            rep:0,
                            done:false,
                          } 
                        setformData([newRowData])   
                     }
        }else{
            const newRowData = { 
                set:0,
                kg:0,
                rep:0,
                done:false,
              } 
            setformData([newRowData])   
        }
      
    },[selectExercise])

     useEffect(()=>{ 
        if(rowCount > 1){
                const newRowData = {
                    set:0,
                    kg:0,
                    rep:0,
                    done:false,
                } 
            setformData([...formData,newRowData])
        } 
    },[rowCount]) 
     

     
  return (
    <div className='Table_Main'>
            <table>
                <thead>
                    <tr>
                            <th>Set</th>
                            <th>Previous</th>
                            <th>kg</th>
                            <th>Rep</th>
                            <th>Done</th>
                        </tr>
                </thead>
                   
                    <tbody>
                        {formData.map((data,index)=> (
                            <tr>
                            <td>{index+1}</td>
                            <td>No previous</td>
                            <td> <input  
                                className='Table-input'
                                type="text"
                                name = 'kg'
                                value = {data.kg}
                                onChange={(e)=>handleChange(e,index)}
                                readOnly = {data.done}
                                />
                            </td>
                            <td> <input  
                                    className='Table-input'
                                    type="text"
                                    name = 'rep'
                                    value = {data.rep}
                                    onChange={(e)=>handleChange(e,index)}
                                    readOnly = {data.done}
                                />
                            </td>
                            <td>
                                <div className='Done_Cloumn'>
                                        <input  
                                            className='Table-check'
                                            type="checkbox"
                                            name = 'done'
                                            checked={data.done}
                                            onChange={(e)=>handleCheckBox(e,index)}
                                        />
                                        <div className='DeleteButton_input'>
                                                <IconButton aria-label="delete" size="small">
                                                            <DeleteIcon fontSize="small" />
                                                </IconButton>
                                        </div>
                                </div> 
                                
                            </td>
                    </tr>
                        ))}
                    </tbody>   
 
            </table>
    </div>
  )
}

export default InputBoxTable
