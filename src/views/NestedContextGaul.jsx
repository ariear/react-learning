import { useAppContextGaul } from "../context/app-context-gaul";

function NestedContextGaul() {
    const context = useAppContextGaul()
    
    return (
        <div>
            <p>Data dibawah diambil dari Context</p>
            <p>{context.count}</p>
            <button className="py-2 px-4 rounded-lg bg-green-400 text-white" onMouseDown={() => context.setCount(context.count + 1)}>+</button>
        </div>
    )
}

export default NestedContextGaul;