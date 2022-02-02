import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import UserForm from './components/UserForm';
import UserFormDemo from './components/UserFormDemo';
import Recommendation from './components/Recommendation';
import ErrorRoute from './components/ErrorRoute';


const axios = require('axios');

export default function App() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        axios('http://localhost:5300/question').then(response => {
            const questionsAPI = response.data;
            questionsAPI.map(question => ({...question, likert: 0}));
            questionsAPI.forEach(function (question) {
                question.likert = 0;
            });
            setQuestions(questionsAPI);
        });
    }, [])

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<UserForm questions={questions}/>} />
                <Route path="/formdemo" element={<UserFormDemo/>} />
                <Route path="/recommendation" element={<Recommendation />} />
                <Route path="*" element={<ErrorRoute />} />
            </Routes>
        </Router>
    );
}