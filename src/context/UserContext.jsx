import { createContext, useContext, useEffect, useState } from "react";


export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [usuario, setUsuario] = useState()
    
    useEffect(() => {


    }, []);

        return (
        <UserContext.Provider value={{user, setUser, usuario, setUsuario}}>
            {children}
        </UserContext.Provider>
        );
}; 

export default UserProvider;

export const useUserContext = () => useContext(UserContext);