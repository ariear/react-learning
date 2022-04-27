import { createContext, useContext, useState } from "react";

export const AppContextGaul = createContext({})

export function useAppContextGaul (){
    return useContext(AppContextGaul)
}

export function AppContextGaulProvider ({children}) {
    const [count , setCount] = useState(0)

    const AppContextGaulValue = {
        message: 'Afakah Work ?',
        count,
        setCount
    }

    return <AppContextGaul.Provider value={AppContextGaulValue}> {children} </AppContextGaul.Provider>
}