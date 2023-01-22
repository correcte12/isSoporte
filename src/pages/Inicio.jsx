import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import hero2 from "./hero2";
import Hero2 from "/node_modules/@notus-pro/react/Hero2";


const hero2 = ${JSON.stringify(hero2)};
const Inicio = () => { 
    const { user, setUser } = useContext(UserContext);

    console.log (user)
    return (
        <>
            Inicio
            <Hero2 {...hero2} />
        </>
    )
};

export default Inicio;