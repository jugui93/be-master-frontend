import React, { useState } from 'react'
import Card from '../components/UIElements/Card'
import LoadingSpinner from '../components/UIElements/LoadingSpinner';

const Logic = () => {
    const [inputValue, setInputValue]= useState(0);
    const [loadedArray, setLoadedArray] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        const fetchArray = async () => {
            try {
                const URL = `http://localhost:5000/api/logica/${inputValue}`;

                const response = await fetch(URL);
                const responseData = await response.json();
                console.log(responseData);
                setLoadedArray(responseData);
                setIsLoading(false);
            } catch (error) {
                console.log(error)
            }
        };

        fetchArray();
    }

  return (
    <div className="center">
      <Card className="wide">
        <h2>Ejercicio 3: Pensamiento lógico</h2>
        De acuerdo al valor ingresado en el siguiente espacio, se retornará un
        array con los números impares desde 1 hasta llegar a dicho valor.
        <br></br>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="limit">
            Ingresa un numero mayor a 0:<br></br>
            <input
              type="number"
              id="limit"
              value={inputValue}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Calcular listado</button>
        </form>
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
        {loadedArray && <h3>{JSON.stringify(loadedArray[0]?.array) || loadedArray.message}</h3>}
      </Card>
    </div>
  );
}

export default Logic