import { createContext, useContext, useEffect, useState } from "react";
import arrayPartes from '../assets/partes'

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState(false)
    const [usuari, setUsuari] = useState()
    const [partes, setPartes] = useState([])
    
    useEffect(() => {
        //axios de partes
        
        setPartes(arrayPartes)
    }, []);

        return (
        <UserContext.Provider value={{user: user, setUser: setUser, usuari: usuari, setUsuari: setUsuari, partes: partes}}>
            {children}
        </UserContext.Provider>
        );
}; 

export default UserProvider;

export const useUserContext = () => useContext(UserContext);