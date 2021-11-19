import React, { useEffect, useState, useContext } from 'react';
import TableBody from './TableBody';
import contextApi from '../contextApi/contextApi';

function TableBodyMiddle({ arrayPlanets }) {
  const [array, setArray] = useState(arrayPlanets);
  const { filters: { filterByName: { name },
    filterByNumericValues,
  } } = useContext(contextApi);

  useEffect(() => {
    setArray(arrayPlanets);
    filterByNumericValues.forEach((element) => {
      const arrayVar = array.filter((elementTwo) => {
        switch (element.comparison) {
        case 'maior que':
          return parseInt(elementTwo[element.column], 10) > parseInt(element.value, 10);
        case 'menor que':
          return parseInt(elementTwo[element.column], 10) < parseInt(element.value, 10);
        case 'igual a':
          return parseInt(elementTwo[element.column], 10) === parseInt(element.value, 10);
        default:
          return console.error('Man para com isso');
        }
      });
      setArray(arrayVar);
    });
  }, [filterByNumericValues]);

  return (
    array.map((infoTable) => (<TableBody
      key={ infoTable.name }
      arrayPlanets={ infoTable }
    />))
      .filter((planet) => planet.key.includes(name))
  );
}

export default TableBodyMiddle;
