import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ListaPartes from "../components/ListaPartes";

const Dashboard = () => { 
    const {usuari, partes} = useContext (UserContext);
    console.log(usuari);
    console.log(partes);

        return (
          <div>
            DashBoard. En estos momentos hay {partes.length} partes controlados
            por el usuario {usuari}
            
            <ListaPartes />
          </div>
        );
 };

 export default Dashboard;
 