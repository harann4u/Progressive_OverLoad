import { createContext,useState ,useRef} from "react";
import { IGlobalContext,ExerciseDataType,muscleDataType,toolDataType,InitalListData,initialMuscleData,initialtoolData } from "./Interface";
import { ExerciseList,muscleData,ToolData } from '../../data/mockJson/exerciselist';

export const GlobalContent = createContext<IGlobalContext>({} as IGlobalContext);

export const GlobalContextProvider = ({children}: any) => {

   
    const [exercisefinalList,setexercisefinalList] = useState<ExerciseDataType[]>(InitalListData)
    const [muscleList,setMuscleList] = useState<muscleDataType[]>(initialMuscleData) 
    const [toolList,setToolList] = useState<toolDataType[]>(initialtoolData) 
    const [finalExercise,setFinalExercise] = useState<string[]>([])
    const [locatStorageState , setLocalStorageState] = useState<string[]>([])
    const overAllRef = useRef({})
    return <GlobalContent.Provider value={{
       
           updateExerciseList: exercisefinalList,
           setupdateExerciseList: setexercisefinalList,

           muscelList: muscleList,
           setMuscleList : setMuscleList,

           toolList:toolList,
           setToolList:setToolList,

           finalExerciseList:finalExercise,
           setFinalExerciseList:setFinalExercise,

           localStorageState:locatStorageState,
           setLocalStorageState:setLocalStorageState,

           overAllData:overAllRef
        }}>
            {children}
        </GlobalContent.Provider>
} 