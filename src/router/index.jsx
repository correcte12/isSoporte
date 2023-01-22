import { createBrowserRouter } from "react-router-dom";
import LayoutContainerForm from "../layouts/LayoutContainerForm";
import LayoutPrivate from "../layouts/LayoutPrivate";
//import Inicio from "../pages/Inicio";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Inicio2 from "../components/Inicio2";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutContainerForm />,
        children: [
            {
                index: true,
                element: <Inicio2 />
            },
            {
                path: "/login",
                element: <Login />
            },
            
            {
                path: "/dashboard",
                element: <LayoutPrivate />,
                children: [
                    {
                            index: true,
                            element: <Dashboard />
                    },
                    
                ]
            }
        ]


    }


])