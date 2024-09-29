import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assurez-vous que ce chemin est correct
import './index.css'; // Assurez-vous que ce fichier existe

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
