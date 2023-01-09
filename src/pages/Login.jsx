import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
//import { useUserContext } from "../context/UserContext";
import axios from "axios";


const Login = () => { 
    
    //const [user, setUser] = useUserContext()

    //const baseURL = "https://vmodapache.scalecloud.net/ispartes/";
    const baseURL = "https://vmodapache.scalecloud.net/ispartes/";
    const restoURL = "menu.pro"

    const [password, setPassword] = useState("");
    const [usuario, setUsuario] = useState("");
    const [user, setUser] = useState({});
    const [partes, setpartes] = useState([])
    const navigate = useNavigate();
    // const handleSubmit = useForm ({
    //     defaultValues: {
    //         usuario: "avalora",
    //         password: "avalora"
    //     }
    // })
   

// useEffect(() => {
//     axios.get(baseURL)
      
//       .then((response) => {
//       setUser(response.data);
//       console.log(response.data.partes)
//       console.log(response.data)
//     });
//   }, []);



    const handleSubmit = async (e) => {
      e.preventDefault()
      try { 
          const response = await axios.get(`${baseURL}menu.pro?USR=${usuario}&PWD=${password}`)
          setUser(response.data);
          console.log(response.data.partes)
          console.log(response.data)
          navigate('/dashboard')
          
      } catch (error) {
          console.log(error)
      }

    }

    



    return (
        <>
        <h1>Ingreso Intranet</h1>

      <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Ingrese su usuario"
            onChange={ (e) => setUsuario(e.target.value) }
            value={usuario}
            id="usuario"
            />
        
        <input 
            type="text" 
            placeholder="Ingrese su contraseña"
            onChange={ (e) => setPassword(e.target.value) }
            value={password}
            id="password"
            />

        <button type="submit">Acceder intranet</button>


      </form>
        </>
    )
};

export default Login;