import { useState } from "react";
import { AppContext } from "../context/app-context";
import ChangeTheme from "./ChangeTheme";
import NestedState from "./NestedState";
import ThemeMode from "./ThemeMode";

function LearnState() {
    const [valkiry, setValkiry] = useState({
        name: 'Rita Rossweise',
        img: 'https://i.pinimg.com/564x/89/70/97/8970971130244cf3d9bc3902b28ed383.jpg'
    }) 
    const [theme, setTheme] = useState('dark')

    const appContextValue = {
        valkiry,
        setValkiry,
        theme,
        setTheme
    }

    return (
        <div className="font-pupylinux">
            <p className="text-3xl font-semibold p-4">Ini Page Belajar State Management</p>
            <AppContext.Provider value={appContextValue}>
            <NestedState />
            <ThemeMode />
            <ChangeTheme />
            </AppContext.Provider>
        </div>
    )
}
export default LearnState;