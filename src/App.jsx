import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import Accueil from "./Accueil/Accueil.jsx";
import Projet from "./Projets/projet.jsx";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Accueil/>
    },
    {
        path:'/projet',
        element: <Projet/>

    }
])

function App(){
    return <RouterProvider router={router}/>
}

export default App;