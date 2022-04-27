import { AppContextGaulProvider } from "../context/app-context-gaul";
import { AppContextReduxProvider } from "../context/app-context-redux";
import NestedContextGaul from "./NestedContextGaul";
import ReduceContext from "./ReduceContext";
import ReducerLearn from "./ReducerLearn";
import SettingInputReduce from "./SettingInputReduce";
import ToggleThemeReduce from "./ToggleThemeReduce";

function ContextGaul() {
    return (
        <div className="font-pupylinux p-4">
            <p className="text-3xl font-semibold">Ini Page Context Gaul</p>
            <p className="text-lg mb-3">Penulisan React context dengan clean</p>
            <AppContextGaulProvider>
                <NestedContextGaul />
            </AppContextGaulProvider>
            <ReducerLearn />
            <AppContextReduxProvider>
            <ReduceContext />
            <SettingInputReduce />
            <ToggleThemeReduce />
            </AppContextReduxProvider>
        </div>
    )
}

export default ContextGaul;