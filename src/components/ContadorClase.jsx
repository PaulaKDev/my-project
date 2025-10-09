import React , { useState } from "react";


const ContadorClase = () => {

    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrementar = () => {
        setCount((prevCount) => prevCount - 1);
    };
    
    return (
        <div>
            <h1>Contador de Clicks</h1>
            <p>Clicks: {count}</p>
            <button onClick={incrementar}>Sumar Click</button>
            <button onClick={decrementar}>Restar Click</button>
        </div>
    );
}

export default ContadorClase;
