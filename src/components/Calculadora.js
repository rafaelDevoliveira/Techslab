import React, { useState } from "react";

export default function Calculadora() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [operação, setOperação] = useState("+");
  const [resul, setResult] = useState("");

  const calculo = () => {
    if (operação === "+") setResult(Number(numero1) + Number(numero2));
    if (operação === "-") setResult(Number(numero1)- Number(numero2));
    if (operação === "/") setResult(Number(numero1) / Number(numero2));
    if (operação === "*") setResult(Number(numero1) * Number(numero2));
  };

  console.log(resul);

  return (
    <div>
      <label>
        digite primeiro valor:
        <input
          type="number"
          onChange={(event) => setNumero1(event.target.value)}
        />
      </label>
      <label>
        digite segundo valor:
        <input
          type="number"
          onChange={(event) => setNumero2(event.target.value)}
        />
      </label>
      <label>
        escolha a operação
        <select onChange={(event) => setOperação(event.target.value)}>
          <option>
            +
          </option>
          <option>
            -
          </option>
          <option>
            /
          </option>
          <option>
            *
          </option>
        </select>
      </label>
      <button 
        type="button"
        onClick={calculo}
      >
        Calcular
      </button>
      <div>O Calculo da operação é :{resul}</div>
    </div>
  );
}
