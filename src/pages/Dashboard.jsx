import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Dashboard = () => { 
    const {usuario, partes} = useContext (UserContext);
    //console.log(partes)
        return (
            <>
                DashBoard. 
                En estos momentos hay {partes.length} partes controlados por el usuario {usuario}
            </>
        )
 };

 export default Dashboard;
 