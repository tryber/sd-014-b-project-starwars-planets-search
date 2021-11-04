import React, { useContext, useState } from 'react';
import StarWarsContext from './context/StarWarsContext';
import Select from './components/Select';

const columns = ['population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'];
const valueRange = ['maior que', 'menor que', 'igual a'];

function TableStarWars() {
  const {
    data,
    keys,
    setFilters,
    filters,
    setData,
  } = useContext(StarWarsContext);
  const [column, setColumn] = useState();
  const [value, setValue] = useState();
  const [comparison, setComparison] = useState();

  function handleName(event) {
    setFilters({ ...filters, filtersByName: { name: event.target.value } });
  }

  function handleColumns(event) {
    setColumn(event.target.value);
  }

  function handleComparison(event) {
    setComparison(event.target.value);
  }

  function handleValue(event) {
    setValue(event.target.value);
  }

  function handleClick() {
    const obj = { comparison, value, column };
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, obj],
    });
    if (comparison === 'maior que') {
      const filtered = data.filter((planet) => Number(planet[column]) > value);
      const index = columns.indexOf(column);
      columns.splice(index, 1);
      setData(filtered);
    }
    if (comparison === 'menor que') {
      const filtered = data.filter((planet) => Number(planet[column]) < value);
      const index = columns.indexOf(column);
      columns.splice(index, 1);
      setData(filtered);
    }
    if (comparison === 'igual a') {
      const filtered = data.filter((planet) => planet[column] === value);
      const index = columns.indexOf(column);
      columns.splice(index, 1);
      setData(filtered);
    }
  }

  return (
    <div>
      <input
        type="text"
        value={ filters.filtersByName.name }
        data-testid="name-filter"
        onChange={ handleName }
      />
      <Select
        array={ columns }
        value={ column }
        dataTestID="column-filter"
        onChange={ handleColumns }
      />
      <Select
        array={ valueRange }
        value={ comparison }
        onChange={ handleComparison }
        dataTestID="comparison-filter"
      />
      <input
        type="number"
        onChange={ handleValue }
        value={ value }
        data-testid="value-filter"
      />
      <button
        type="submit"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filtrar

      </button>
      <table>
        <thead>
          <tr>
            {keys.map((title) => <th key={ title }>{ title }</th>)}
          </tr>
        </thead>
        <tbody>
          {data.filter((planet) => planet.name.includes(filters.filtersByName.name))
            .map((element, index) => (
              <tr key={ index }>
                <td>{element.name}</td>
                <td>{element.rotation_period}</td>
                <td>{element.orbital_period}</td>
                <td>{element.diameter}</td>
                <td>{element.climate}</td>
                <td>{element.gravity}</td>
                <td>{element.terrain}</td>
                <td>{element.surface_water}</td>
                <td>{element.population}</td>
                <td>{element.films}</td>
                <td>{element.created}</td>
                <td>{element.edited}</td>
                <td>{element.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableStarWars;
