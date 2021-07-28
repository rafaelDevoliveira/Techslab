import React, { useState } from "react";

export default function Calculadora() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [operação, setOperação] = useState("+");
  const [resul, setResult] = useState("");

  const calculo = () => {
    if (operação === "+") setResult(Number(numero1) + Number(numero2));
    if (operação === "-") setResult(Number(numero1) - Number(numero2));
    if (operação === "/") setResult(Number(numero1) / Number(numero2));
    if (operação === "*") setResult(Number(numero1) * Number(numero2));
  };

  console.log(resul);

  return (
    <div>
      <label>
        <input
          placeholder="Digite primeiro valor:"
          type="number"
          onChange={(event) => setNumero1(event.target.value)}
        />
      </label>
      <label>
        <input
          placeholder="Digite o segundo valor"
          type="number"
          onChange={(event) => setNumero2(event.target.value)}
        />
      </label>
      <label>
        Operação
        <select onChange={(event) => setOperação(event.target.value)}>
          <option>+</option>
          <option>-</option>
          <option>/</option>
          <option>*</option>
        </select>
      </label>
      <button type="button" onClick={calculo}>
        Calcular
      </button>
      <div>O Calculo da operação é :{resul}</div>
    </div>
  );
}
