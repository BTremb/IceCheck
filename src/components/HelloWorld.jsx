import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * @returns A simple component that displays a heading and a button.
 */
const HelloWorld = () => {
    /**
     * This is a hook that allows us to navigate to a different page.
     */
    const navigate = useNavigate();
    return (
        <div>
            <h1>Hello World</h1>
            <button onClick={() => navigate('/material-ui')}>Click Me</button>
        </div>
    );
}

export default HelloWorld;