import React, { useEffect, useState, useRef } from 'react';
import { FormHeader, Questions, StyledButton } from '../styles/style';
import { Question } from './Question';
import { useNavigate } from "react-router-dom";

const axios = require('axios');

export default function UserForm() {
    const [questions, setQuestions] = useState([]);
    const [answered, setAnswered] = useState(2);    // 0 - false    1 - true    2 - undefined 
    const firstRender = useRef(1);

    useEffect(() => {
        axios('http://localhost:5500/question').then(response => {
            const questionsAPI = response.data;
            questionsAPI.map(question => ({...question, likert: 0}));
            questionsAPI.forEach(function (question) {
                question.likert = 0;
            });
            setQuestions(questionsAPI);
        });
    }, [])
    

    useEffect(() => {
        if (answered !== 2) {
            alertOrNavigate()
            setAnswered(2)
        }
    }, [answered])

    function alertOrNavigate() {
        if (!firstRender.current) {
            if (answered === 1)
                navigate("/formdemo", {state: true})
            else if (answered === 0)
                alert("As questões não foram todas respondidas.")
        }
    }

    const handleClick = () => {
        firstRender.current = false;
        let allAnswered = true;
        for (const question of questions) {
            if (question.likert === 0) {
                allAnswered = false;
                setAnswered(0);
                break;
            }
        }

        if (allAnswered)
            setAnswered(1)
    }

    const navigate = useNavigate();

    return (
        <>
            <FormHeader>
                <p>The following are some questions that are part of the
                    form to, at the end, predict your user type. </p>
            </FormHeader>
            <Questions>
                {
                questions.map(question => <Question key={question._id} question={question} state={{questions: questions, setQuestions: setQuestions}}/>)
                }
                <StyledButton onClick={handleClick}>Continue</StyledButton>
            </Questions>
        </>
    )
}