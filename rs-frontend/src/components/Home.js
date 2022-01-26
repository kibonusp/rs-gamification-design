import { ScreenBlue, Panel, Title, TextArea, StyledButton } from "../styles/style"
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/form");
    }

    return (
        <ScreenBlue>
            <Panel>
                <Title>ReGammend</Title>
                <TextArea>
                    <h2 style={{fontWeight: 400}}>Welcome!!</h2>
                    <p>This website has the purpose to show the results of a research that seeks to create a 
                    system which recommends a gamification design according to the user’s Hexad type.</p>
                    <p>It is particularly important to improve how personalized gamification creates engagement
                    with the user by providing the best design possible according to validated gamification user type taxonomy.</p>
                </TextArea>
                <StyledButton onClick={handleClick}>Show me!</StyledButton>
            </Panel>
        </ScreenBlue>
    )
}