import styled from "styled-components";

/* ----------------- HOME ----------------- */

export const ScreenBlue = styled.div`
    position:fixed;
    padding:0;
    margin:0;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: #366696;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #366696;
`;

export const Panel = styled.div`
    background-color: #F6F6F6;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px;
    min-height: 70%;
    @media screen and (max-width: 2561px) {
        width: 75%;
        height: 85%;
    }
    @media screen and (max-width: 1441px) {
        width: 90%;
        height: auto;
    }

    /*
    @media screen and (max-width: 426px) {
        margin: 0em 1em;
    }
    */
`

export const Title = styled.h1`
    font-weight: 500;
    font-size: 2.5rem;
    margin: 0.3em;

    @media screen and (max-width: 2561px) {
        font-size: 3.6rem;
    }
    @media screen and (max-width: 1441px) {
        font-size: 2.8rem;
    }
    @media screen and (max-width: 426px) {
        font-size: 2rem;
    }
    @media screen and (max-width: 376px) {
        font-size: 1.65rem;
    }
`

export const TextArea = styled.div`
    font-weight: 400;
    margin: 0em 18ch;
    text-align: justify;
    font-size: 1.3rem;
    margin: 0 6ch;
    p {
        text-indent: 3em;
    }
    @media screen and (max-width: 2561px) {
        h2 {
            margin-top: 0;
        }
        font-size: 1.6rem;
    }
    @media screen and (max-width: 1441px) {
        h2 {
            margin-top: 0.825em;
        }
        font-size: 1.45rem;
        margin: 0 3ch;
    }
    @media screen and (max-width: 1025px) {
        font-size: 1.2rem;
        margin: 0 3ch;
    }  
    @media screen and (max-width: 426px) {
        font-size: 1rem;
        margin: 0 2ch;
    }
    @media screen and (max-width: 321px) {
        font-size: 0.9rem;
    }
`

export const StyledButton = styled.button`
    width: 8em;
    height: 3em;
    background-color: #12B4B6;
    color: #F6F6F6;
    border: 5px solid #309688;
    border-radius: 15px;
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0.3em;
    &:hover {
        background-color: #11A9AB;
    }
    @media screen and (max-width: 769px) {
        width: 7em;
        font-size: 2rem;
    }
    @media screen and (max-width: 426px) {
        width: 7em;
        height: 2.9em;
        font-size: 1.35rem;
    }
`

/* ----------------- UserForm ----------------- */

export const CentralizedColumn = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #question {
        margin: 1em 0em;
    }
`;

export const FormHeader = styled.div`
    width: 100%;
    background-color: #366696;
    padding: 0.1em 0.5em;
    text-align: center;
    color: #F6F6F6;
    font-weight: 400;
    font-size: 1.55rem;
    top: 0;
    position: sticky;
    z-index: 1;
    p {
        text-align: center;
        padding: 0em 1em;
    }
    @media screen and (max-width: 2561px) {
        font-size: 2rem;
    }
    @media screen and (max-width: 769px) {
        font-size: 1.8rem;
        p {
            padding: 0.2em;
        }
    }
    @media screen and (max-width: 426px) {
        font-size: 1.4rem;
    }
    @media screen and (max-width: 392px) {
        font-size: 1.1rem;
    }
`

export const Questions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3em 1em;
    @media screen and (max-width: 392px) {
        margin: 1em;
    }
`

/* ----------------- Question ----------------- */
export const QuestionText = styled.span`
    color: #366696;
    font-weight: 500;
    font-size: 1.5rem;
    text-align: center;
    padding: 0 2rem;
    @media screen and (max-width: 2561px) {
        font-size: 1.8rem;
    }
    @media screen and (max-width: 769px) {
        font-size: 1.6rem;
    }
    @media screen and (max-width: 426px) {
        font-size: 1.2rem;
    }
    @media screen and (max-width: 392px) {
        font-size: 1.1rem;
    }
    @media screen and (max-width: 321px) {
        font-size: 1rem;
        padding: 0 3rem;
    }
`

export const Likert = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin: 1em;
    @media screen and (max-width: 2561px) {
        width: 100em;
    }
    @media screen and (max-width: 1651px) {
        width: 85em;
    }
    @media screen and (max-width: 1441px) {
        width: 80em;
    }
    @media screen and (max-width: 1300px) {
        width: 70em;
    }
    @media screen and (max-width: 1025px) {
        width: 60em;
    }
    @media screen and (max-width: 769px) {
        width: 45em;
    }
    @media screen and (max-width: 426px) {
        width: 24em;
    }
    @media screen and (max-width: 392px) {
        width: 24em;
    }
    @media screen and (max-width: 367px) {
        width: 20em;
    }
`

export const LikertLabel = styled.h3`
    color: ${props => props.color};
    font-size: 1rem;
    text-align: center;
    font-weight: 500;
    margin-bottom: 0;
    margin-top: 0.4em;
    @media screen and (max-width: 2561px) {
        font-size: 1.3rem;
    }
    @media screen and (max-width: 769px) {
        font-size: 1.1rem;
    }
    @media screen and (max-width: 426px) {
        font-size: 0.75rem;
    }
    @media screen and (max-width: 392px) {
        font-size: 0.65rem;
    }
    @media screen and (max-width: 367px) {
        font-size: 0.53rem;
    }
`

export const SpecialRadio = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-bottom: 0;
    justify-content: space-between;
    align-items: center;
    height: 100%;
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

export const RadioContainer = styled.div`
    width: 2rem;
    margin: 0 2.9rem;
    @media screen and (max-width: 769px) {
        margin: 0 1.5rem;
    }
    @media screen and (max-width: 426px) {
        margin: 0 0.5rem;
    }
    @media screen and (max-width: 392px) {
        margin: 0 0.425rem;
    }
    @media screen and (max-width: 367px) {
        margin: 0 0.3rem;
    }
`

export const Radio = styled.label`
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
        width: 3.1em;
        height: 3.1em;
        font-size: 2rem;
        padding: 0;
        font-family: 'Poppins';
        font-weight: 300;
    }
    @media screen and (max-width: 2561px) {
        label {
            font-size: 2rem;
        }
        input {
            font-size: 3rem;
        }
    }
    @media screen and (max-width: 471px) {
        label {
            font-size: 1.3rem;
        }
        input {
            font-size: 2rem;
        }
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
    @media screen and (max-width: 2561px) {
        h3 {
            font-size: 2rem;
        }
        font-size: 1.7rem;
        width: 25%;
        margin-top: 1em;
    }
    @media screen and (max-width: 1025px) {
        width: 40%;
    }
    @media screen and (max-width: 471px) {
        width: 60%;
        h3 {
            font-size: 1.3rem;
        }
    }
`

/* ----------------- UserFormDemo ----------------- */

export const Square = styled.div`
    background-color: ${props => props.color};
    width: 1.3em;
    height: 1.3em;
    margin-right: 10px;
`

export const Hexad = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2em;
    font-size: 1.4rem;
    @media screen and (max-width: 750px) {
        margin: 1em;
    }
`

export const HexLabels = styled.div`
    color: #366696;
    font-weight: 500;
    font-size: 1.8rem;
    .label {
        display: flex;
        margin: 0.8em 6em;
    }
    @media screen and (max-width: 1851px) {
        font-size: 1.6rem;
    }
    @media screen and (max-width: 1301px) {
        font-size: 1.4rem;
    }
    @media screen and (max-width: 1074px) {
        font-size: 1.1rem;
        .label {
            margin: 0.8em 3em;
        }
    }
    @media screen and (max-width: 750px) {
        font-size: 1rem;
        .label {
            margin: 0.8em 2em;
        }
    }
    @media screen and (max-width: 576px) {
        font-size: 0.9rem;
        .label {
            margin: 0.8em 1em;
        }
    }
`

export const UserType = styled.h2`
    color: #366696;
    font-size: 2.4rem;
    @media screen and (max-width: 1301px) {
        font-size: 2rem;
    }
    @media screen and (max-width: 1074px) {
        font-size: 1.8rem;
    }
`

export const UserTypeID = styled.div`
    display: flex;
    justify-content: center;
    width: 60%;
    @media screen and (max-width: 1500px) {
        width: 65%;
    }
    @media screen and (max-width: 1301px) {
        width: 80%;
    }
    @media screen and (max-width: 1074px) {
        width: 90%;
    }
    @media screen and (max-width: 887px) {
        width: 100%;
    }
`

export const HexFraction = styled.div`
    background-color: ${props => props.color};
    height: 6em;
    width: ${props => parseInt(Math.round(100*props.fract/props.total)) + "%"};
    margin: 0em;
    @media screen and (max-width: 1074px) {
        height: 4em;
    }
    @media screen and (max-width: 750px) {
        height: 3em;
    }

`

export const Results = styled.h1`
    font-weight: 500;
    color: #F6F6F6;
    display: flex;
    background-color: #366696;
    height: 2.7em;
    margin: 0;
    justify-content: center;
    align-items: center;
    font-size: 2.8rem;
    @media screen and (max-width: 1301px) {
        font-size: 2.2rem;
    }
    @media screen and (max-width: 1074px) {
        font-size: 1.8rem;
    }
` 

export const ParamResult = styled.div`
    color: #366696;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        font-size: 2.4rem;
        text-align: center;
    }
    figure {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 45%;
    }
    figure img {
        width: 100%;
    }
    figure figcaption {
        align-self: start;
        font-weight: 500;
        font-size: 2.2rem;
    }
    @media screen and (max-width: 1301px) {
        h2 {
            font-size: 2.4rem;
        }
        figure figcaption {
            font-size: 1.6rem;
        }
        figure {
            width: 60%;
        }
    }
    @media screen and (max-width: 1074px) {
        h2 {
            font-size: 1.8rem;
        }
        figure figcaption {
            font-size: 1.4rem;
        }
    }
`