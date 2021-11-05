import React, { useContext, useState } from 'react';
import ContextPlanets from '../context/ContextPlanets';
import optionsCollum, { optionsComparison, removeOptionColumn } from '../helper/helper';

const Filter = () => {
  const { getFilterNumeric, data, setData } = useContext(ContextPlanets);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
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

  const filterData = () => {
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

  const resetState = () => {
    setColumn('');
    setComparison('');
    setValue('0');
  };

  const handleClick = () => {
    getFilterNumeric(column, comparison, value);
    filterData();
    removeOptionColumn(optionsCollum, column);
    resetState();
  };

  return (
    <section>
      <select
        data-testid="column-filter"
        onChange={ handleColumn }
        value={ column }
      >
        { optionsCollum.map((option, index) => (
          <option key={ index } value={ option }>{ option }</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleComparison }
        value={ comparison }
      >
        {optionsComparison.map((option, index) => (
          <option key={ index } value={ option }>{ option }</option>
        ))}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ handleInput }
        value={ value }
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
