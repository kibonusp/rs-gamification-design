import { RadioContainer, CheckMark } from "../styles/style"
import { ACTIONS } from "./Question"

export function CustomRadio({color, opacity, action, payload, value}) {
    return (
        <RadioContainer color={color} opacity={opacity}>
            <input type="radio" name="radio" onClick={() => action({type: ACTIONS.CHANGE_LIKERT, payload: {...payload, likert: value}})}/>
            <CheckMark />
        </RadioContainer>
    )
}