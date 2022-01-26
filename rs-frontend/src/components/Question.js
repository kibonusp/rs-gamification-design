import React, { useReducer } from 'react';
import { QuestionText, Likert, LikertLabel } from '../styles/style';
import { CustomRadio } from './CustomRadio';

export const ACTIONS = {
    CHANGE_LIKERT: 'change-likert'
}

function reducer(likert, action){
    switch (action.type) {
        case ACTIONS.CHANGE_LIKERT:
            let questions = action.payload.questions;
            let question = {...action.payload.question};
            const setQuestions = action.payload.setQuestions;

            let questionIndex = questions.findIndex(q => q._id === question._id);
            question.likert = parseInt(action.payload.likert);
            questions[questionIndex] = question;
            setQuestions(questions);
        
            return question.likert;

        default:
            return likert
    }
}

export function Question({question, state}) {
  	const [likert, dispatch] = useReducer(reducer, 0)

    return (
        <>
            <QuestionText>{question.description}</QuestionText>
            <Likert>
                <LikertLabel color="#B60000">Completely Disagree</LikertLabel>
                <CustomRadio color="#B60000" opacity="100" action={dispatch} payload={{questions: state.questions, setQuestions: state.setQuestions, question: question}} value="1"/>
                <CustomRadio color="#B60000" opacity="33"  action={dispatch} payload={{questions: state.questions, setQuestions: state.setQuestions, question: question}} value="2" />
                <CustomRadio color="#B60000" opacity="66"  action={dispatch} payload={{questions: state.questions, setQuestions: state.setQuestions, question: question}} value="3" />
                <CustomRadio color="#A7B600" opacity="66"  action={dispatch} payload={{questions: state.questions, setQuestions: state.setQuestions, question: question}} value="4" />
                <CustomRadio color="#00AF3B" opacity="66"  action={dispatch} payload={{questions: state.questions, setQuestions: state.setQuestions, question: question}} value="5" />
                <CustomRadio color="#00AF3B" opacity="33"  action={dispatch} payload={{questions: state.questions, setQuestions: state.setQuestions, question: question}} value="6" />
                <CustomRadio color="#00AF3B" opacity="100" action={dispatch} payload={{questions: state.questions, setQuestions: state.setQuestions, question: question}} value="7" />
                <LikertLabel color="#00AF3B">Completely Agree</LikertLabel>
            </Likert>
        </>
    )
}