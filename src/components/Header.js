import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Header() {
  const columnOptions = {
    population: 'population',
    orbital_period: 'orbital_period',
    diameter: 'diameter',
    rotation_period: 'rotation_period',
    surface_water: 'surface_water',
  };

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valueFilter, setValue] = useState('100000');
  const [options, setOptions] = useState(columnOptions);

  const { filters: { filterByName: { name } }, setFilters } = useContext(PlanetsContext);

  function handleOptions() {
    const newOptions = columnOptions;
    delete newOptions[column];
    setOptions(newOptions);
  }

  return (
    <header>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        type="text"
        placeholder="Filtrar por Nome"
        value={ name }
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => {
          setFilters((prevState) => ({
            ...prevState,
            filterByName: { name: value },
          }));
        } }
      />
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target: { value } }) => setColumn(value) }
      >
        {
          Object.keys(options).map((option, index) => (
            <option className="option" key={ index }>{option}</option>
          ))
        }
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ ({ target: { value } }) => setComparison(value) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ valueFilter }
        onChange={ ({ target: { value } }) => setValue(value) }
      />
      <button
        onClick={ () => {
          setFilters((prevState) => ({
            ...prevState,
            filterByNumericValues: [
              ...prevState.filterByNumericValues,
              {
                column,
                comparison,
                value: valueFilter,
              },
            ],
            isFiltered: true,
            currentColumn: column,
            currentComparison: comparison,
            currentValue: valueFilter,
          }));
          handleOptions();
        } }
        type="button"
        data-testid="button-filter"
      >
        Filtrar

      </button>
    </header>
  );
}

export default Header;
