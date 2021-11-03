import React, { useContext } from 'react';
import MyContext from '../MyContext';

export default function Filters() {
  const { contextValue } = useContext(MyContext);
  const { setFilterByName, setFilterByNumericValues } = contextValue;

  return (
    <>
      <div>
        <input
          data-testid="name-filter"
          type="text"
          onChange={ (event) => setFilterByName({ name: event.target.value }) }
        />
      </div>
      <select
        data-testid="column-filter"
        onChange={ (event) => setFilterByNumericValues({ column: event.target.value }) }
      >
        <option value="population">population</option>
        <option value="orbitual_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={
          (event) => setFilterByNumericValues({ comparison: event.target.value })
        }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (event) => setFilterByNumericValues({ value: event.target.value }) }
      />
      <button type="submit" data-testid="button-filter">Filtrar</button>
    </>
  );
}
