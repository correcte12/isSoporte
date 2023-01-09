import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";


const NavBar = () => { 
    
    const {user, setUser} = useUserContext();

    return (
        <nav>
            <NavLink to="/">Inicio</NavLink> ||
            <NavLink to="/login">Login</NavLink> ||
            { user && (
                <>
                    <NavLink to="/dashboard">DashBoard</NavLink>
                    <button onClick={() => setUser(false)}>Salir</button>
                
                </>
            )
            }
        </nav>
    );
};

 export default NavBar;