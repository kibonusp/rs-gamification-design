import React, { useEffect } from 'react'
import { Radio, CheckMark, RadioContainer } from "../styles/style"
import { ACTIONS } from "./Question"

export function CustomRadio({color, opacity, action, payload, value}) {

    useEffect(() => {
        console.log(payload.question.likert)
    }, [])

    return (
        <RadioContainer>
            <Radio color={color} opacity={opacity}>
                {
                    payload.question.likert === parseInt(value) ? 
                        <input type="radio" name="radio" checked onClick={() => action({type: ACTIONS.CHANGE_LIKERT, payload: {...payload, likert: value}})}/>
                    :
                        <input type="radio" name="radio" onClick={() => action({type: ACTIONS.CHANGE_LIKERT, payload: {...payload, likert: value}})}/>
                }
                <CheckMark />
            </Radio>
        </RadioContainer>
    )
}