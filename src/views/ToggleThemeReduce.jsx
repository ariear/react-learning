import { useAppContextRedux } from "../context/app-context-redux";

function ToggleThemeReduce() {
    const [state, dispatch] = useAppContextRedux()

    return (
        <div>
            <p>{state.theme}</p>
            <button onClick={() => dispatch({type:'changeTheme'})}>Change Theme</button>
        </div>
    )
}

export default ToggleThemeReduce;