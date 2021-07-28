import React from 'react'

export default function FizBuzz() {

  function fiz(numero){
    if(numero > 100 || numero < 1){
      return 'numero inválido'
    }
    if(numero % 5 ===0 && numero %3 ===0 ){
      return 'fizz-buzz'
    } else if( numero %3 ===0 ){
      return 'fizz'
    } else if( numero %5 ===0){
      return 'buzz'
    }
    return numero
  }

  return (
    <div>
      <h2>{fiz(101)}</h2>      
    </div>
  )
}
