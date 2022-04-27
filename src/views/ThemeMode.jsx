import { useContext } from "react";
import { AppContext } from "../context/app-context";

function ThemeMode() {
    const context = useContext(AppContext)
    
    return (
        <div>
            <p>{context.theme}</p>
        </div>
    )
}

export default ThemeMode;