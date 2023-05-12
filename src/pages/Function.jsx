import React from 'react'
import Card from '../components/UIElements/Card'

const Function = () => {
  return (
    <div className="center">
      <Card className="wide">
        <h2>Ejercicio 2: Nomenclatura</h2>
        <p>
          Se tiene la siguiente función de nombre <code>f</code>, y parametros{" "}
          <code>x, y, z.</code>
          <br></br>En este caso no sabriamos el proposito que cumple dicha
          función. <br></br>
          <code>
            {" "}
            function f(x,y,z) {"{"}
            <br></br>
            let a = x + y;<br></br>
            let b = a * z;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let c = Math.sin(b);<br></br>
            return c;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
            {"}"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </code>
        </p>
        <p>
          Una manera descriptiva de llamar la función y sus parametros, sería{" "}
          <br></br>la siguiente:<br></br>
          <code>
            {" "}
            function calcularSeno(coordenadaX,coordenadaY,coordenadaZ) {"{"}
            <br></br>
            let suma = coordenadaX + coordenadaY;<br></br>
            let producto = suma * coordenadaZ;&nbsp;&nbsp;&nbsp;<br></br>
            let seno =
            Math.sin(producto);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br></br>
            return
            seno;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br></br>
            {"}"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </code><br></br>
          En este caso se identifica que la función es usada para calcular el seno de una <br></br>
          correlación existente entre las coordenadas X, Y y Z en un espacio. 
        </p>
      </Card>
    </div>
  );
}

export default Function