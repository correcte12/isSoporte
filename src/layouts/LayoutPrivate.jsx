import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


const LayoutPrivate = () => { 
    
    return (
        <>

            <Outlet />
            <Footer />
        </>
    )
};

export default LayoutPrivate;

