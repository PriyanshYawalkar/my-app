import React, { useState } from 'react';

const Welcome: React.FC = () => {
    const [counter, setCounter] = useState(0);

    const handleButtonClick = () => {
        setCounter(counter + 1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Hello</h1>
            <p>Counter: {counter}</p>
            <button onClick={handleButtonClick}>Increase Counter</button>
        </div>
    );
};

export default Welcome;