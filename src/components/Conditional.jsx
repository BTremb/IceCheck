import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


/**
 * A simple component that flips and flops.
 * Showing the concept of conditional rendering.
 * 
 * @returns 
 */
const Conditional = () => {
    const navigate = useNavigate();
    const [flipFlop, setFlipFlop] = useState(false);

    return(
        <>
            {/* The following is a ternary operator. It is a conditional statement. If flipFlop is true, show Flip, if false, show Flop */}
            {flipFlop ? (
                <h1>Flip</h1>
            ) : (
                <h1>Flop</h1>
            )}
            <Button variant="contained" color="primary" onClick={() => setFlipFlop(!flipFlop)}>{flipFlop ? 'flop' : 'flip'}</Button>
            <Button variant="contained" color="primary" onClick={() => navigate('/')}>Take me Home</Button>
        </>
    )
}

export default Conditional;