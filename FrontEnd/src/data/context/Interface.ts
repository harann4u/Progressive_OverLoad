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

export interface IGlobalContext {
    userInfo:IUserInfo,
    setUserInfo:(e:IUserInfo)=>void,
    settingInfo: ISettingInfo,
    setSettingInfo: (e: ISettingInfo) => void;
}

export const initalGlobalContext = {
    useInfo:{
        name:'',
        weight:''
    }, 
    setUserInfo:()=>null,
    settingInfo:{
        fontsize:''
    },
    setSettingInfo:()=> null
}

