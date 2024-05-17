export interface IUserInfo{
    name:string,
    weight:string
}

export const initialUserInfo:IUserInfo = {
    name:'',
    weight:''
}

export interface ISettingInfo{
   fontsize:string
}

export const initialSettingInfo:ISettingInfo = {
    fontsize:'0'
} 

export interface ExerciseDataType {
    "Id": number,
	"Name": string,
	"Muscle":string,
	"tool": string,
    "check":boolean
}

export const InitalListData:ExerciseDataType[] = [{
    "Id": 0,
	"Name": '',
	"Muscle":'',
	"tool": '',
    "check":false
}] 

export interface muscleDataType {
    "id":number,
    "Name" :string,
    "check":boolean
}

export interface toolDataType {
    "id":number,
    "Name" :string,
    "check":boolean
}

export const initialMuscleData:muscleDataType[] = [{
    "id":0,
    "Name":'',
    "check":false
}]

export const initialtoolData:toolDataType[] = [{
    "id":0,
    "Name":'',
    "check":false
}]



export interface IGlobalContext {
    userInfo:IUserInfo,
    setUserInfo:(e:IUserInfo)=>void,
    settingInfo: ISettingInfo,
    setSettingInfo: (e: ISettingInfo) => void;
    // Checked List 
    updateExerciseList: ExerciseDataType[],
    setupdateExerciseList: (newList: ExerciseDataType[]) => void;
    // Muscle
    muscelList:muscleDataType[],
    setMuscleList:(eachList:muscleDataType[]) => void;
    // Tool
    toolList:toolDataType[],
    setToolList:(eachList:toolDataType[]) => void
    // finalExerciseList 
    finalExerciseList:string[],
    setFinalExerciseList:(newList: string[]) => void;
    // local Storage states
    locatStoageState:string[]
    setLocalStorageState:(newList: string[]) => void;
}



