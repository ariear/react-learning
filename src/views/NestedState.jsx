import { useContext } from "react";
import { AppContext } from "../context/app-context";

function NestedState() {
    const context = useContext(AppContext)

    return (
        <div>
            <p>Data dibawah dipanggil menggunakan Context</p>
            <div className="w-max m-4 border rounded-lg p-4 shadow">
                <img src={context.valkiry.img} className="w-[300px] rounded-lg" alt="" />
                <p className="text-center text-lg mt-2">{context.valkiry.name}</p>
            </div>
                <input className="py-2 px-3 rounded-lg border font-light m-4" type="text" 
                    onChange={(e) => { context.setValkiry({
                        ...context.valkiry,
                        name:e.target.value
                    })}} 
                    value={context.valkiry.name} />
        </div>
    )
}

export default NestedState;