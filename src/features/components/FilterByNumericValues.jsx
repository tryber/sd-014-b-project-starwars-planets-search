import React, { useContext, useState } from 'react';
import { PlanetFinderContext } from '../../context/PlanetFinderContext';

export default function FilterByNumericValues() {
  const {
    filters: { filterByNumericValues },
    setters: { setFilterByNumericValues },
  } = useContext(PlanetFinderContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('100000');

  const handleClick = () => {
    setFilterByNumericValues([
      ...filterByNumericValues,
      { column, comparison, value },
    ]);
  };

  return (
    <fieldset>
      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ (e) => setColumn(e.target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ comparison }
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
      />
      <button data-testid="button-filter" type="button" onClick={ handleClick }>
        Filtrar
      </button>
    </fieldset>
  );
}
