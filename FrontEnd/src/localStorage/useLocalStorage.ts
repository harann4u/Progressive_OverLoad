export const useLocalstorage = (key:string) => {
    
    const setItem = (value:unknown) => {
        // console.log('keu',key)
        try{
            window.localStorage.setItem(key,JSON.stringify(value))
        }catch (Error){
            throw Error
        }
    }
    const getItem = () => {
        try{
            const item = window.localStorage.getItem(key)
            // console.log('item',item)
            return item ? JSON.parse(item) : undefined        
        }catch (Error){
            throw Error
        }
    }

    const removeItem = () => {
        try{
             window.localStorage.removeItem(key)       
        }catch (Error){
            throw Error
        }
    }

    return { setItem , getItem , removeItem }
}