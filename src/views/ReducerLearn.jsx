import { useReducer } from "react";

const reducer = (state , action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload }
        case 'decrement' :
            return { ...state, count: state.count - action.payload }
        case 'theme':
            return { ...state , theme: state.theme === 'light' ? 'dark' : 'light'}
        default:
            return 'Bilek'
    }
}

const initialState = {
    count: 0,
    theme: 'light'
}

function ReducerLearn() {
    const [state , dispatch] = useReducer(reducer , initialState)
    return (
        <div className="mb-5">
            <p className="text-xl font-medium mt-4">Belajar UseReducer</p>
            <div className="flex items-center">
                <button className="py-2 px-4 rounded-lg text-white bg-red-400" onMouseDown={() => dispatch({type : 'decrement' , payload : 2})}>-</button>
                <p className="mx-3">{state.count}</p>
                <button className="py-2 px-4 rounded-lg text-white bg-green-400" onMouseDown={() => dispatch({type: 'increment' , payload : 2})}>+</button>
            </div>
            <div>
                <p>{state.theme}</p>
                <button className="py-2 px-6 rounded-full bg-green-400" onClick={() => dispatch({type : 'theme'})}>Toggle Theme</button>
            </div>
        </div>
    )
}

export default ReducerLearn;