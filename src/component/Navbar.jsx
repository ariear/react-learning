import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex items-center py-3 bg-blue-400 justify-center font-pupylinux text-white">
            <p className="mr-3"><NavLink className={(props) => props.isActive ? 'text-slate-200 font-light' : '' } to="/">Home</NavLink></p>
            <p className="mr-3"><NavLink className={(props) => props.isActive ? 'text-slate-200 font-light' : '' } to="/learnstate">Context</NavLink></p>
            <p className="mr-3"><NavLink className={(props) => props.isActive ? 'text-slate-200 font-light' : '' } to="/contextgaul">Context Gaul & Use Reducer</NavLink></p>
            <p className="mr-3"><NavLink className={(props) => props.isActive ? 'text-slate-200' : '' } to="/list">List</NavLink></p>
            <p className="mr-3"><NavLink className={(props) => props.isActive ? 'text-slate-200' : '' } to="/about">About</NavLink></p>
            <p className="mr-3"><NavLink className={(props) => props.isActive ? 'text-slate-200' : '' } to="/blog">Blog</NavLink></p>
        </nav>
    )
}

export default Navbar;