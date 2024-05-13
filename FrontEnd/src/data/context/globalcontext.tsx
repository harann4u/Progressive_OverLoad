import { createContext,useState } from "react";
import { IGlobalContext, ISettingInfo, IUserInfo, initialSettingInfo, initialUserInfo,josnDataType,InitalListData } from "./Interface";


export const GlobalContent = createContext<IGlobalContext>({} as IGlobalContext);

export const GlobalContextProvider = ({children}: any) => {
    const [userInfo, setUserInfo] = useState<IUserInfo>(initialUserInfo);
    const [setttingInfo, setSettingInfo] = useState<ISettingInfo>(initialSettingInfo);
    const [finalList,setFinalList] = useState<josnDataType[]>(InitalListData)
    const updateFinalList = (newList: josnDataType[]) => {
        setFinalList(newList);
    };
    return <GlobalContent.Provider value={{
           userInfo,
           setUserInfo,
           settingInfo: setttingInfo,
           setSettingInfo,
           finalList,
           setFinalList:updateFinalList
        }}>
            {children}
        </GlobalContent.Provider>
} 