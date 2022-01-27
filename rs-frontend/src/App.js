import React from 'react';
import {BrowserRouter as Router, useRoutes, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import UserForm from './components/UserForm';
import UserFormDemo from './components/UserFormDemo';
import Recommendation from './components/Recommendation';
import ErrorRoute from './components/ErrorRoute';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<UserForm />} />
                <Route path="/formdemo" element={<UserFormDemo/>} />
                <Route path="/recommendation" element={<Recommendation />} />
                <Route path="*" element={<ErrorRoute />} />
            </Routes>
        </Router>
    );
}