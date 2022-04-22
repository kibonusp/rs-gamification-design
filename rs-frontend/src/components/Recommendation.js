import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Square, HexLabels, Results, HexFraction, ParamResult, StyledButton, UserType, UserTypeID, Hexad } from '../styles/style';
import fictional from '../assets/fictional0.png'
import personal from '../assets/personal1.png'
import performance from '../assets/performance2.png'
import social from '../assets/social3.png'
import ecological from '../assets/ecological4.png'

const colors = ["#FF0000A5","#0038FFA5","#00D33BA5","#FAFF00A5","#FF00F5A5","#FFA800A5"]

const images = [
    {
        name: "Fictional",
        file:  fictional
    },
    {
        name: "Personal",
        file: personal
    },
    {
        name: "Performance",
        file: performance
    },
    {
        name: "Social",
        file: social
    },
    {
        name: "Ecological",
        file: ecological
    }
]

function compare (a, b) {
    if (a.value > b.value)
        return -1;
    if (a.value < b.value)
        return 1;
    return 0;
}

export default function Recommendation() {
    const location = useLocation();
    const user = location.state;
    const navigate = useNavigate();
    const totalHexad = user ? (user.userTypes).reduce((a, b) => a + b, 0) : 0;
    const components = [
        {
            index: 0,
            value: user.userTypes[0],
            text: `Philanthropist: driven by purpose - ${(100 * user.userTypes[0]/totalHexad).toFixed(2)}%`,
            component: <HexFraction key={0} color={colors[0]} total={totalHexad} fract={user.userTypes[0]}/>},
        {
            index: 1,
            value: user.userTypes[1],
            text: `Player: driven by rewards - ${(100 * user.userTypes[1]/totalHexad).toFixed(2)}%`,
            component: <HexFraction key={1} color={colors[1]} total={totalHexad} fract={user.userTypes[1]}/>},
        {
            index: 2,
            value: user.userTypes[2],
            text: `Socializer: driven by involvement with others - ${(100 * user.userTypes[2]/totalHexad).toFixed(2)}%`,
            component: <HexFraction key={2} color={colors[2]} total={totalHexad} fract={user.userTypes[2]}/>},
        {
            index: 3,
            value: user.userTypes[3],
            text: `Achiever: driven by competence - ${(100 * user.userTypes[3]/totalHexad).toFixed(2)}%`,
            component: <HexFraction key={3} color={colors[3]} total={totalHexad} fract={user.userTypes[3]}/>},
        {
            index: 4,
            value: user.userTypes[4],
            text: `Free Spirit: driven by autonomy - ${(100 * user.userTypes[4]/totalHexad).toFixed(2)}%`,
            component: <HexFraction key={4} color={colors[4]} total={totalHexad} fract={user.userTypes[4]}/>},
        {
            index: 5,
            value: user.userTypes[5],
            text: `Disruptor: driven by triggering of change - ${(100 * user.userTypes[5]/totalHexad).toFixed(2)}%`,
            component: <HexFraction key={5} color={colors[5]} total={totalHexad} fract={user.userTypes[5]}/>}
    ].sort(compare)

    const handleClick = () => {
        navigate('/');
    }

    useEffect(() => {
        if (!user) {
            alert("You must answer the whole form before.")
            navigate("/")
        }
    }, [])

    return user ? 
        <>  
            <Results>Results</Results>

            <Hexad>
                <UserType>Your Hexad User Type</UserType>
                <UserTypeID>
                    {
                        components.map(component => component.component)
                    }
                </UserTypeID>
            </Hexad>
            <HexLabels>
                {
                    components.map(component => 
                        <div className='label'>
                            <Square color={colors[component.index]}></Square>
                            {component.text}
                        </div>
                    )
                }
            </HexLabels>
            <ParamResult>
                <h2>Sense of Accomplishment</h2>
                <figure>
                    <figcaption style={{alignSelf: 'start'}}>{images[user.recommendation[0][0]].name}</figcaption>
                    <img src={images[user.recommendation[0][0]].file} alt="Recommended storyboard for Sense of Accomplishment"/>
                </figure>
            </ParamResult>
            <ParamResult>
                <h2>Preference</h2>
                <figure>
                    <figcaption>{images[user.recommendation[1][0]].name}</figcaption>
                    <img src={images[user.recommendation[1][0]].file} alt="Recommended storyboard for Preference"/>
                </figure>
                <StyledButton style={{margin: '1.5em'}} onClick={handleClick}>Back to Home</StyledButton>
            </ParamResult>
        </>
    : ""
}