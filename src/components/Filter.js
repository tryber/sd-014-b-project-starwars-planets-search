import React, { useContext, useState } from 'react';
import ContextPlanets from '../context/ContextPlanets';
import optionsCollum from '../helper/helper';

const Filter = () => {
  const { getFilterNumeric, data, setData } = useContext(ContextPlanets);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  const handleColumn = ({ target }) => {
    setColumn(target.value);
  };

  const handleComparison = ({ target }) => {
    setComparison(target.value);
  };

  const handleInput = ({ target }) => {
    setValue(target.value);
  };

  const handleClick = () => {
    getFilterNumeric(column, comparison, value);
    if (comparison === 'maior que') {
      const dataFilter = data
        .filter((planet) => Number(planet[column]) > Number(value));
      setData(dataFilter);
    }
    if (comparison === 'menor que') {
      const dataFilter = data
        .filter((planet) => Number(planet[column]) < Number(value));
      setData(dataFilter);
    }

    if (comparison === 'igual a') {
      const dataFilter = data
        .filter((planet) => Number(planet[column]) === Number(value));
      setData(dataFilter);
    }
  };

  return (
    <section>
      <select
        data-testid="column-filter"
        onChange={ handleColumn }
      >
        { optionsCollum.map((option, index) => (
          <option key={ index } value={ option }>{ option }</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleComparison }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ handleInput }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </section>
  );
};

export default Filter;
