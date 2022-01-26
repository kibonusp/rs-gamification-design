import React from 'react';
import {BrowserRouter as Router, useRoutes} from 'react-router-dom';
import Home from './components/Home';
import UserForm from './components/UserForm';
import UserFormDemo from './components/UserFormDemo';
import Recommendation from './components/Recommendation';

const AppRoutes = () => useRoutes([
        {path: "/", element: <Home />},
        {path: "/home", element: <Home />},
        {path: "/form", element: <UserForm />},
        {path: "/formdemo", element: <UserFormDemo />},
        {path: "/recommendation", element: <Recommendation />}
]);

export default function App() {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}

// Tela 1: boas vindas
// Tela 2: dados demográficos (idade, escolaridade, gênero, país) / Hexad
// Tela 3: Recomendação (mostrando o(s) storyboard dado preference e sense of accomplishment)