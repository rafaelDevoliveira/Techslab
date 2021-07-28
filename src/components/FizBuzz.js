import React, { useState } from "react";

export default function FizBuzz() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado]= useState();

  function fiz() {
    if (numero > 100 || numero < 1) {
      setResultado("numero inválido");
    }
    if (numero % 5 === 0 && numero % 3 === 0) {
      setResultado("fizz-buzz");
    } else if (numero % 3 === 0) {
      setResultado("fizz");
    } else if (numero % 5 === 0) {
      setResultado("buzz");
    }    
  }

  return (
    <div>
      <input
        type="number"
        onChange={(event) => setNumero(event.target.value)}
        placeholder="Digite um numero"
      ></input>
      <button 
        type="button"
        onClick={fiz}
      >
        Verificar
      </button>

      <h2>O numero é : {resultado}</h2>
    </div>
  );
}
