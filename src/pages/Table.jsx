import React, { useEffect, useState } from 'react';
import TableBodyMiddle from './TableBodyMiddle';
import useSort from './useSort';

function Table() {
  const [planets, setPlanets] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [planetsSort, setPlanetsSort] = useSort();

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((r) => r.json())
      .then(({ results }) => {
        results.forEach((element) => {
          delete element.residents;
        });
        setPlanets(results);
      })
      .then(() => {
        setCarregando(false);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setPlanetsSort(planets);
  }, [planets, setPlanetsSort]);

  const THeadInfor = () => {
    const arrayObject = Object.keys(planets[0]);
    return arrayObject;
  };

  const bodyTable = () => (
    <table>
      <thead>
        <tr>
          { THeadInfor().map((value) => <th key={ value }>{ value }</th>) }
        </tr>
      </thead>
      <tbody>
        <TableBodyMiddle arrayPlanets={ planetsSort } />
      </tbody>
    </table>
  );

  return (
    carregando ? <h1>Carregando....</h1> : bodyTable()
  );
}

export default Table;
