import { ScreenBlue, Panel, StyledButton} from "../styles/style"
import { useNavigate } from "react-router-dom";

export default function ErrorRoute() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <ScreenBlue>
            <Panel style={{justifyContent: "center"}}>
                <h1>This route is not available.</h1>
                <StyledButton onClick={handleClick}>Back to Home</StyledButton>
            </Panel>
        </ScreenBlue>
    )
}