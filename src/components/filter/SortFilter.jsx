import React, { useState, useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';

function SortFilter() {
  const { data, setData /* filters, order */ } = useContext(PlanetContext);
  // const { column, sort  } = order;

  const [sortValue, setSortValue] = useState({
    column: 'Name',
    oreder: 'ASC',
  });

  const t = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  function handleChange({ target: { value } }) {
    setSortValue({
      ...sortValue,
      column: value,
    });
  }

  function handle({ target: { value } }) {
    setSortValue({
      ...sortValue,
      order: value,
    });
  }

  function ordenar() {
    const { column, order } = sortValue;
    const filtro = [...data];
    const num = -1;
    if (order === 'ASC') {
      filtro.sort((a, b) => (a[column] > b[column] ? 1 : num))
        .sort((a, b) => a[column] - b[column]);
    }

    if (order === 'DESC') {
      filtro.sort((a, b) => (a[column] < b[column] ? 1 : num))
        .sort((a, b) => b[column] - a[column]);
    }

    setData(filtro);
  }

  return (
    <div>
      <select name="select-sort" data-testid="column-sort" onChange={ handleChange }>
        {t.map((each, index) => <option key={ index }>{each}</option>)}
      </select>
      <input
        type="radio"
        name="sort"
        value="ASC"
        onChange={ handle }
        data-testid="column-sort-input-asc"
      />
      ASC
      <input
        type="radio"
        name="sort"
        value="DESC"
        onChange={ handle }
        data-testid="column-sort-input-desc"
      />
      DESC
      <button
        type="button"
        onClick={ ordenar }
        data-testid="column-sort-button"
      >
        Ordenar
      </button>
    </div>
  );
}

export default SortFilter;
