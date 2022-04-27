import { useAppContextRedux } from "../context/app-context-redux";

function SettingInputReduce() {
    const [state , dispatch] = useAppContextRedux()
    
    return (
        <div className="my-2">
            <input type="text" 
                className="p-2 rounded-lg border shadow-sm"
                value={state.valkiry.name ?? ''}
                onChange={(e) => dispatch({type: 'updateName', payload : {...state.valkiry , name: e.target.value}})} />
        </div>
    )
}

export default SettingInputReduce;