import React, { useEffect, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Square, HexLabels, Results, HexFraction, ParamResult, StyledButton } from '../styles/style';
import fictional from '../assets/fictional0.webp'
import personal from '../assets/personal1.webp'
import performance from '../assets/performance2.webp'
import social from '../assets/social3.webp'
import ecological from '../assets/ecological4.webp'

const colors = {
    Philanthropist: "#FF0000A5",
    Player: "#0038FFA5",
    Socializer: "#00D33BA5",
    Achiever: "#FAFF00A5",
    FreeSpirit: "#FF00F5A5",
    Disruptor: "#FFA800A5"
}

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

export default function Recommendation() {
    const location = useLocation();
    const user = location.state;
    const navigate = useNavigate();
    const totalHexad = user ? (user.userTypes).reduce((a, b) => a + b, 0) : 0;

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

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2em', fontSize: '1.4rem'}}>
                <h2 style={{color: '#366696'}}>Your Hexad User Type</h2>
                <div style={{display: 'flex', justifyContent: 'center', width: "80%"}}>
                    <HexFraction color={colors.Philanthropist} total={totalHexad} fract={user.userTypes[0]}/>
                    <HexFraction color={colors.Player} total={totalHexad} fract={user.userTypes[1]}/> 
                    <HexFraction color={colors.Socializer} total={totalHexad} fract={user.userTypes[2]}/> 
                    <HexFraction color={colors.Achiever} total={totalHexad} fract={user.userTypes[3]}/> 
                    <HexFraction color={colors.FreeSpirit} total={totalHexad} fract={user.userTypes[4]}/> 
                    <HexFraction color={colors.Disruptor} total={totalHexad} fract={user.userTypes[5]}/> 
                </div>
            </div>
            <HexLabels>
                <div className='label'>
                    <Square color={colors.Philanthropist}></Square>
                    Philanthropist: driven by purpose
                </div>
                <div className='label'>
                    <Square color={colors.Player}></Square>
                    Player: driven by rewards
                </div>
                <div className='label'>
                    <Square color={colors.Socializer}></Square>
                    Socializer: driven by involvement with others
                </div>
                <div className='label'>
                    <Square color={colors.Achiever}></Square>
                    Achiever: driven by competence
                </div>
                <div className='label'>
                    <Square color={colors.FreeSpirit}></Square>
                    Free Spirit: driven by autonomy
                </div>
                <div className='label'>
                    <Square color={colors.Disruptor}></Square>
                    Disruptor: driven by triggering of change
                </div>
            </HexLabels>
            <ParamResult>
                <h2>Sense of Accomplishment</h2>
                <figure>
                    <figcaption style={{alignSelf: 'start'}}>{images[user.recommendation[0][0]].name}</figcaption>
                    <img src={images[user.recommendation[0][0]].file} />
                </figure>
            </ParamResult>
            <ParamResult>
                <h2>Preference</h2>
                <figure>
                    <figcaption>{images[user.recommendation[1][0]].name}</figcaption>
                    <img src={images[user.recommendation[1][0]].file} />
                </figure>
                <StyledButton style={{margin: '1.5em'}} onClick={handleClick}>Back to Home</StyledButton>
            </ParamResult>
        </>
    : ""
}