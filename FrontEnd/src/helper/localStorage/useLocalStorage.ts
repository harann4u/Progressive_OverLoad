export const useLocalstorage = (key:string) => {
    
    const setLocalStorageItem = (value:unknown) => {
        // console.log('keu',key)
        try{
            window.localStorage.setItem(key,JSON.stringify(value))
        }catch (Error){
            throw Error
        }
    }
    const getLocalStorageItem = () => {
        try{
            const item = window.localStorage.getItem(key)
            // console.log('item',item)
            return item ? JSON.parse(item) : undefined        
        }catch (Error){
            throw Error
        }
    }

    const removeStorageItem = () => {
        try{
             window.localStorage.removeItem(key)       
        }catch (Error){
            throw Error
        }
    }

    return {  setLocalStorageItem ,  getLocalStorageItem ,  removeStorageItem }
}