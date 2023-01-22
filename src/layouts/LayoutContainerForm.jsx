import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const LayoutContainerForm = () => { 
    
    return (
        <>  
           <NavBar />
                <Outlet />
           
        </>
    )
};

export default LayoutContainerForm;

