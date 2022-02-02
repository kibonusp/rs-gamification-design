import styled from "styled-components";

/* ----------------- HOME ----------------- */

export const ScreenBlue = styled.div`
    background-color: #366696;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #366696;
`;

export const Panel = styled.div`
    background-color: #F6F6F6;
    width: 90%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    font-size: 1.3rem;
`

export const Title = styled.h1`
    font-weight: 500;
`

export const TextArea = styled.div`
    font-weight: 400;
    margin: 0em 18ch;
    text-align: justify;
    p {
        text-indent: 3em;
    }
`

export const StyledButton = styled.button`
    margin-top: 1em;
    width: 8em;
    height: 4.5rem;
    background-color: #12B4B6;
    color: #F6F6F6;
    border: 5px solid #309688;
    border-radius: 15px;
    font-size: 1.8rem;
    font-weight: 700;
    &:hover {
        background-color: #11A9AB;
    }
`

/* ----------------- UserForm ----------------- */

export const FormHeader = styled.div`
    background-color: #366696;
    width: 100%;
    height: 6em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F6F6F6;
    font-weight: 400;
    font-size: 1.55rem;
    top: 0;
    position: sticky;
    z-index: 1;
    p {
        width: 50%;
        text-align: center;
    }
`

export const Questions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3em 0em;
    div {
        margin-bottom: 2em;
    }
`

/* ----------------- Question ----------------- */
export const QuestionText = styled.span`
    color: #366696;
    font-weight: 500;
    font-size: 1.5rem;
`

export const Likert = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    label {
        margin: 1.5em 2.75em;
    }
`

export const LikertLabel = styled.h3`
    color: ${props => props.color};
    width: 10%;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 500;
`

export const Line = styled.hr`
    border: 0;
    clear:both;
    display:block;
    width: 96%;          
    background-color: #366696;
    height: 1px;
`

/* ----------------- Custom Radio ----------------- */
const opacityHex = (color, opacity) => {
    opacity = Math.round((100 - parseInt(opacity))*256/100).toString(16)
    if (color.length === 7)
        return opacity !== "0" ? color + opacity : color;
    return color;
}

export const CheckMark = styled.span`
    position: absolute;
    top: 0.25em;
    left: 0.25em;
    height: 75%;
    width: 75%;
    background-color: #F6F6F6;
    border-radius: 50%;

    &:after {
        content: "";
        position: absolute;
        display: none;
    }
`

export const RadioContainer = styled.label`
    display: block;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 2rem;
    width: 2rem;
    background-color: ${props => opacityHex(props.color, props.opacity)};
    border-radius: 50%;

    input {
        position: relative;
        opacity: 0;
        cursor: pointer;
    }

    &:hover input ~ ${CheckMark} {
        background-color: ${props => opacityHex(props.color, props.opacity)};
    }

    input:checked ~ ${CheckMark} {
        background-color: ${props => opacityHex(props.color, props.opacity)};
    }

    input:checked ~ ${CheckMark}:after {
        display: block;
    }
`

/* ----------------- UserFormDemo ----------------- */
export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    color: #366696;
    font-weight: 500;
`

export const Age = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    margin-top: 1em;
    input {
        border: 1px solid #C6C6C6;
        border-radius: 6px;
        text-align: center;
        width: 2em;
        max-width: 2em;
        height: 2em;
        font-size: 2em;
        padding: 0;
        font-family: 'Poppins';
        font-weight: 300;
    }
`

export const MySelect = styled.div`
width: 30%;
    margin-top: 2em;
    h3 {
        font-weight: 500;
        font-size: 1.25rem;
        margin: 0;
    }
`