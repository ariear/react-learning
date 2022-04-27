import { useContext } from "react";
import { AppContext } from "../context/app-context";

function ChangeTheme() {
    const context = useContext(AppContext)

    return (
        <div>
            <input type="checkbox" onChange={(e) => e.target.checked ? context.setTheme('white') : context.setTheme('dark')}  />
        </div>
    )
}

export default ChangeTheme;