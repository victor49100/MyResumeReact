import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from './Accueil/Accueil.jsx'; // Vérifie la casse des noms
import Projet from './Projets/projet.jsx'; // Assure-toi que ce fichier existe

const router = createBrowserRouter([
    {
        path: '/',
        element: <Accueil />,
    },
    {
        path: '/projet',
        element: <Projet />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
