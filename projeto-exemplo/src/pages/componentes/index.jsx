import React, { useState } from 'react'
import logo from '../../assets/react.svg'

let Inicial = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>oiiiii</h1>
            <button onClick = {() => setCount((count) => count + 1)}>click {count}</button>
        </div>
    );
    
};

export default Inicial;