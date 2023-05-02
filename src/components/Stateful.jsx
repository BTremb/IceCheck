import { Button, Card, Typography } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


/**
 * Note that it is important that the file name and component name match. 
 * It is also important to react to use uppercase letters for the component name.
 */
const Stateful = () => {
    // State is a way to store data in a component. It is similar to a variable.
    const [gold, setGold] = useState(0);
    const navigate = useNavigate();

    return(
        // The Card component is a Material UI component. It is a container (div) that can be styled.
        <Card style={{display: 'flex', flexDirection: 'column', width: '30%', margin: 'auto'}}>
            I am a card. And I am worth {gold} gold.
            <Button variant="contained" color="primary" onClick={() => setGold(gold + 1)}> +1. </Button>
            <Button variant="contained" color="secondary" onClick={() => setGold(gold - 1)}> -1. </Button>
            <Button variant="contained" color="error" onClick={() => navigate('/flipflop')}> Next Page. </Button>
            <Typography variant="h6">I wonder how I could vertically center this?</Typography>
        </Card>
    )
}

export default Stateful;