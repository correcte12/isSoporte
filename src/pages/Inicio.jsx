import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Inicio = () => { 
    const { user, setUser } = useContext(UserContext);

    console.log (user)
    return (
        <>
            Inicio
        </>
    )
};

export default Inicio;

