import { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import logoMediano from "../assets/logo_is_mediano.jpg";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const Login = () => {
  //const baseURL = "https://vmodapache.scalecloud.net/ispartes/";
  const baseURL = "https://vmodapache.scalecloud.net/ispartes/";
  const restoURL = "menu.pro?";
  
 
  const [password, setPassword] = useState ("");
  const [usuario, setUsuario] = useState ("");
  
  const {user, setUser, usuari, setUsuari} = useContext(UserContext);
  //console.log(user)
 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `${baseURL}${restoURL}USR=${usuario}&PWD=${password}`
      );
      const msg = response.data.msgError;
      if (msg === "Error usuario o contraseña") {
        navigate("/");
      } else {
        setUser(true)
        setUsuari(usuario)
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="grid place-items-center">
        <figure className="max-w-lg">
          <img className="w-52 h-52" src={logoMediano} alt="isSoporte" />
        </figure>

        <h1 className="center text-5xl font-extrabold dark:text-white">
          Ingreso Intranet
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="m-6 ">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Usuario
            </label>

            <input
              type="text"
              placeholder="Ingrese su usuario"
              onChange={(e) => setUsuario(e.target.value)}
              value={usuario}
              id="usuario"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="m-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Contraseña
            </label>
            <input
              type="text"
              placeholder="Ingrese su contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="password"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="grid place-items-center m-6">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
            >
              Acceder intranet
            </button>
          </div>
        </div>
        <div className="grid place-items-center m-6">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <div className="grid place-items-center m-6">
          <span className="text-lg font-bold dark:text-white"
          >
            isSoftware - 2023
          </span>
        </div>
      </form>
    </>
  );
};

export default Login;
