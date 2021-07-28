import React, { useState } from "react";
import "../index.css";

export default function Age() {
  const [idade, setIdade] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [cor, setCor] = useState();

  const age = () => {
    if (idade > 18) {
      setMensagem("Permissão concedida");
      setCor(true);
    } else {
      setMensagem("Sem permissão");
      setCor(false);
    }
  };
  console.log(idade);
  return (
    <div>
      <label>
        <input
          placeholder="Digite sua idade :"
          type="text"
          onChange={(event) => setIdade(event.target.value)}
        />
      </label>
      <button type="button" onClick={age}>
        Enviar
      </button>
      <div style={{ color: `${cor ? "green" : "red"}` }}>{mensagem}</div>
    </div>
  );
}
