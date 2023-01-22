import { Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import LayoutContainerForm from "./layouts/LayoutContainerForm";
import NavBar from "./components/NavBar";


const App = () => { 
  return(
    <>
    <NavBar />
    <h1>App central</h1>
    <Routes>
          <Route path="/" element={
            <RequireAuth>
              <Inicio />
            </RequireAuth>
          }
          />
          <Route path="/" element={<LayoutPrivate/>}>
              <Route element={<Login />} path="/login"></Route>  
              <Route element={<Registro />} path="/registro"></Route>
          </Route>
    </Routes>
  </>
  )
 };

 export default App;