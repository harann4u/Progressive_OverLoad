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

export interface josnDataType {
    "Id": number,
	"Name": string,
	"Muscle":string,
	"tool": string,
    "check":boolean
}

export const InitalListData:josnDataType[] = [{
    "Id": 0,
	"Name": '',
	"Muscle":'',
	"tool": '',
    "check":false
}] 



export interface IGlobalContext {
    userInfo:IUserInfo,
    setUserInfo:(e:IUserInfo)=>void,
    settingInfo: ISettingInfo,
    setSettingInfo: (e: ISettingInfo) => void;
    // Checked List 
    finalList: josnDataType[],
    setFinalList: (newList: josnDataType[]) => void;
}
// export const initalGlobalContext = {
//     useInfo:{
//         name:'',
//         weight:''
//     }, 
//     setUserInfo:()=>null,
//     settingInfo:{
//         fontsize:''
//     },
//     setSettingInfo:()=> null,
  

// }



