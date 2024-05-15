import { createContext,useState } from "react";
import { IGlobalContext, ISettingInfo, IUserInfo, initialSettingInfo, initialUserInfo,ExerciseDataType,muscleDataType,toolDataType,InitalListData } from "./Interface";
import { ExerciseList,muscleData,ToolData } from '../../data/mockJson/exerciselist';

export const GlobalContent = createContext<IGlobalContext>({} as IGlobalContext);

export const GlobalContextProvider = ({children}: any) => {

    const updateNewExerciseList= ExerciseList.map((el)=>{
        return {...el,check:false}
    })

    const [userInfo, setUserInfo] = useState<IUserInfo>(initialUserInfo);
    const [setttingInfo, setSettingInfo] = useState<ISettingInfo>(initialSettingInfo);
    const [exercisefinalList,setexercisefinalList] = useState<ExerciseDataType[]>(updateNewExerciseList)
    const [muscleList,setMuscleList] = useState<muscleDataType[]>(muscleData) 
    const [toolList,setToolList] = useState<toolDataType[]>(ToolData) 
    const [finalExercise,setFinalExercise] = useState<string[]>([])
    return <GlobalContent.Provider value={{
           userInfo,
           setUserInfo,
           settingInfo: setttingInfo,
           setSettingInfo,
           updateExerciseList: exercisefinalList,
           setupdateExerciseList: setexercisefinalList,
           muscelList: muscleList,
           setMuscleList : setMuscleList,
           toolList:toolList,
           setToolList:setToolList,
           finalExerciseList:finalExercise,
           setFinalExerciseList:setFinalExercise
        }}>
            {children}
        </GlobalContent.Provider>
} 