import React from "react";

export default function Tb_vetor() {
  const Number = [8, 4, 6, 9, 2, 5, 10, 7, 1, 3];
  const result = Number.sort((a, b) => a - b);

  return (
    <table>
      <thead>
        <tr>
          <th>Um</th>
          <th>Dois</th>
          <th>Tres</th>
          <th>Quatro</th>
          <th>Cinco</th>
          <th>Seis</th>
          <th>Sete</th>
          <th>Oito</th>
          <th>Nove</th>
          <th>Dez</th>
        </tr>
      </thead>
      <tbody>
        {result.map((number) => {
          return (
            <tr key={number}>
              <td>{number}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
