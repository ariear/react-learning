import { useAppContextRedux } from "../context/app-context-redux";

function ReduceContext() {
    const [state ] = useAppContextRedux()

    return (
        <div>
            <p className="font-medium text-2xl mb-3">Ini Penerapan Reduce di Context</p>
            <div className="w-max text-center border rounded-xl p-3 shadow-sm">
            <img src={state.valkiry.img} className="w-[400px] rounded-xl" alt="" />
            <p className="pt-2 font-medium text-lg">{state.valkiry.name}</p>
            </div>
        </div>
    )
}

export default ReduceContext;