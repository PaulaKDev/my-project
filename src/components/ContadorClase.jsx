import React, { useState } from "react";

const ContadorClase = () => {
  const [count, setCount] = useState(0);

  const incrementar = () => setCount((prevCount) => prevCount + 1);
  const decrementar = () => setCount((prevCount) => prevCount - 1);

  return (
    <main role="main" aria-labelledby="contador-title">
      <h1 id="contador-title">Contador de Clicks</h1>
      <p aria-live="polite">Clicks: {count}</p>
      <div className="button-group" role="group" aria-label="Controles del contador">
        <button type="button" onClick={incrementar}>Sumar Click</button>
        <button type="button" onClick={decrementar}>Restar Click</button>
      </div>
    </main>
  );
};

export default ContadorClase;