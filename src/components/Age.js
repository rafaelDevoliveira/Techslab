import React, { useState } from "react";

export default function Age() {
  const [idade, setIdade] = useState("");
  const [mensagem, setMensagem] = useState("");

  const age = () => {
    if (idade > 18) {
      setMensagem("Permissão concedida");
    } else {
      setMensagem("Sem permissão");
    }
  };
  return (
    <div>
      <label>
        Digite sua idade :
        <input type="text" onChange={(event) => setIdade(event.target.value)} />
      </label>
      <button type="button" onClick={age}>
        Enviar
      </button>
      <div>{mensagem}</div>
    </div>
  );
}
