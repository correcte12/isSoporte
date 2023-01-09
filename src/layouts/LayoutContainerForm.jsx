import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const LayoutContainerForm = () => { 
    
    return (
        <>  
            <NavBar />
            <Outlet />
            Footer público
        </>
    )
};

export default LayoutContainerForm;

