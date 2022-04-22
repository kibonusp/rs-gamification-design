import React, { useReducer } from 'react';
import { QuestionText, Likert, LikertLabel, SpecialRadio, CentralizedColumn } from '../styles/style';
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
  	const [, dispatch] = useReducer(reducer, 0)

    return (
        <CentralizedColumn id="question">
            <QuestionText>{question.description}</QuestionText>
            <Likert>
                <SpecialRadio>
                    <CustomRadio color="#B60000" opacity="100" action={dispatch} payload={{questions: state.questions, setQuestions: state.setQuestions, question: question}} value="1"/>
                    <LikertLabel color="#B60000">Completely Disagree</LikertLabel>
                </SpecialRadio>
                <CustomRadio color="#B60000" opacity="33"  action={dispatch} payload={{questions: state.questions, setQuestions: state.setQuestions, question: question}} value="2" />
                <CustomRadio color="#B60000" opacity="66"  action={dispatch} payload={{questions: state.questions, setQuestions: state.setQuestions, question: question}} value="3" />
                <CustomRadio color="#A7B600" opacity="66"  action={dispatch} payload={{questions: state.questions, setQuestions: state.setQuestions, question: question}} value="4" />
                <CustomRadio color="#00AF3B" opacity="66"  action={dispatch} payload={{questions: state.questions, setQuestions: state.setQuestions, question: question}} value="5" />
                <CustomRadio color="#00AF3B" opacity="33"  action={dispatch} payload={{questions: state.questions, setQuestions: state.setQuestions, question: question}} value="6" />
                <SpecialRadio>
                    <CustomRadio color="#00AF3B" opacity="100" action={dispatch} payload={{questions: state.questions, setQuestions: state.setQuestions, question: question}} value="7" />
                    <LikertLabel color="#00AF3B">Completely Agree</LikertLabel>
                </SpecialRadio>
            </Likert>
        </CentralizedColumn>
    )
}