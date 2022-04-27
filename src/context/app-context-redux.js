import { createContext, useContext, useEffect, useReducer } from "react";

export const AppContextRedux = createContext({})

export function useAppContextRedux(){
    return useContext(AppContextRedux)
}


function reduce (state , action) {
    switch (action.type) {
        case 'updateValkiry':
            return { ...state , valkiry: action.payload }
        case 'changeTheme':
            return { ...state , theme: state.theme === 'dark' ? 'white' : 'dark' }
        case 'updateName' : 
            return { ...state , valkiry: action.payload }
        default:
            break;
    }
}

const initialState = {
    valkiry: {},
    theme: 'dark'
}

export function AppContextReduxProvider({children}){
    const [state , dispatch] = useReducer(reduce , initialState)

    useEffect(() => {
      const valkiry = {
        name: 'Bronya',
        img: 'https://w0.peakpx.com/wallpaper/163/960/HD-wallpaper-blue-dress-bronya-zaychik-honkai-impact-3rd.jpg'
      } 

      dispatch({type: 'updateValkiry' , payload : valkiry})
    }, [])
    

    const AppContextReduxValue = [state,dispatch]

    return <AppContextRedux.Provider value={AppContextReduxValue}>{children}</AppContextRedux.Provider>
}