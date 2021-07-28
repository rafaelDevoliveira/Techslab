import React from "react";
import '../index.css'

export default function Tb_vetor() {
  const Number = [8, 4, 6, 9, 2, 5, 10, 7, 1, 3];
  const result = Number.sort((a, b) => a - b);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Um</th>
          <th>hois</th>
          <th>Tres</th>
          <th>Quatro</th>
          <th>Cinco</th>
          <th>Seis</th>
          <th>Sete</th>
          <th>Oito</th>
          <th>Nove</th>
          <th>hez</th>
        </tr>
      </thead>
      <tbody>
        {result.map((number) => {
          return (
            <td key={number}>
              <tr>{number}</tr>
            </td>
          );
        })}
      </tbody>
    </table>
  );
}
