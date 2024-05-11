import { createContext,useState } from "react";
import { IGlobalContext, ISettingInfo, IUserInfo, initialSettingInfo, initialUserInfo } from "./Interface";


export const GlobalContent = createContext<IGlobalContext>({} as IGlobalContext);

export const GlobalContextProvider = ({children}: any) => {
    const [userInfo, setUserInfo] = useState<IUserInfo>(initialUserInfo);
    const [setttingInfo, setSettingInfo] = useState<ISettingInfo>(initialSettingInfo);

    return <GlobalContent.Provider value={{userInfo, setUserInfo, settingInfo: setttingInfo, setSettingInfo }}>{children}</GlobalContent.Provider>
}