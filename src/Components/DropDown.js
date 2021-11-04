import React, { useContext, useState } from 'react';
import DataContext from '../context/Context';

const options = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

const DropDown = () => {
  const { filterObject, setFilter, planets, setPlanets } = useContext(DataContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [numberValue, setNumberValue] = useState('100000');

  // lógica da função onCLick retirada do repo do Michael Caxias
  // ref: https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/1/commits/1e67a41f29c6db5b76634fc6d6cdcfe337aa6e07
  const onClick = () => {
    setFilter({
      filters: {
        ...filterObject.filters,
        filterByNumericValues: [
          ...filterObject.filters.filterByNumericValues,
          { column, comparison, numberValue },
        ],
      },
    });

    const filterByNumeric = planets.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return Number(planet[column]) > Number(numberValue);
      case 'menor que':
        return Number(planet[column]) < Number(numberValue);
      case 'igual a':
        return Number(planet[column]) === Number(numberValue);
      default:
        return null;
      }
    });
    setPlanets(filterByNumeric);
  };

  return (
    <>
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target: { value } }) => setColumn(value) }
        name="column"
      >
        { options.map((option) => (
          <option key={ option }>
            {option}
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ ({ target: { value } }) => setComparison(value) }
      >
        <option>maior que</option>
        <option>igual a</option>
        <option>menor que</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target: { value } }) => setNumberValue(value) }
        value={ numberValue }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ onClick }
      >
        Adicionar Filtro
      </button>
    </>
  );
};

export default DropDown;
