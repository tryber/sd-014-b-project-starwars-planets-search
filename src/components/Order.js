import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Order() {
  const { data, setPlanets, orderData } = useContext(PlanetsContext);
  const optionsColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  function clickOrder() {
    const planets = data;
    const column = document.querySelector('#columnOrder').value;
    const asc = document.querySelector('#asc');
    const desc = document.querySelector('#desc');
    const order = (asc.checked ? asc.value : desc.value);
    const returnOrder = orderData(planets, column, order);
    setPlanets([...returnOrder]);
  }

  return (
    <>
      <label htmlFor="columnOrder">
        Order
        <select id="columnOrder" data-testid="column-sort">
          { optionsColumns.map((option, index) => (
            <option key={ index }>{ option }</option>
          ))}
        </select>
      </label>
      <label htmlFor="asdc">
        Ascendente
        <input
          type="radio"
          value="ASC"
          id="asc"
          name="order"
          data-testid="column-sort-input-asc"
        />
      </label>
      <label htmlFor="desc">
        Descendente
        <input
          type="radio"
          value="DESC"
          id="desc"
          name="order"
          data-testid="column-sort-input-desc"
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ clickOrder }
      >
        Ordenar
      </button>
    </>
  );
}
