import React, { useState } from 'react';

const Contador = () => {
  const [Contador, setContador] = useState(0);

  const incrementContador = () => {
    setContador(Contador + 1);
  };

  const decrementContador = () => {
    setContador(Contador - 1);
  };

  return (
    <div>
      <h1>Contador</h1>
      <p>Valor: {Contador}</p>
      <button onClick={incrementContador}>Incrementar</button>
      <button onClick={decrementContador}>Decrementar</button>
    </div>
  );
};

export default Contador;
