import { useContext, useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/app-context";

function About() {
    const navigate = useNavigate()
    useEffect(() => {
      navigate('/about/nested')
    }, [])

    const context = useContext(AppContext)
    
    return (
        <div>
            <p>Halo Ini Page About</p>
            <p>{context.message}</p>
            <p><NavLink to='/about/nested' className={(e) => e.isActive ? '' : 'text-blue-400'}>Nested Route</NavLink></p>
            <Outlet />
        </div>
    )
}

export default About;