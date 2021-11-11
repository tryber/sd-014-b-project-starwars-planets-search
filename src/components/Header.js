import React, { useContext } from 'react';
import Context from '../context/Context';
import fetchURL from './API';

function Header() {
  const {
    data,
    setData,
    setColumnFilter,
    setComparisonFilter,
    setValueFilter,
    columnFilter,
    comparisonFilter,
    valueFilter,
    setFilteredData,
    selectColumn,
    setSelectColumn } = useContext(Context);

  function handleChange({ target }) {
    const takeFilteredPlanets = data
      .filter((eachPlanet) => eachPlanet.name.toLowerCase()
        .includes(target.value.toLowerCase()));
    setFilteredData(takeFilteredPlanets);
    if (target.value === '') {
      const fetchData = async () => {
        setData(await fetchURL());
      };
      fetchData();
    }
  }

  function takeChangeColumn({ target }) {
    setColumnFilter(target.value);
  }

  function takeComparison({ target }) {
    setComparisonFilter(target.value);
  }

  function takeValue({ target }) {
    setValueFilter(target.value);
  }

  function filterButton() {
    setSelectColumn(selectColumn.filter((eachSelect) => eachSelect !== columnFilter));
    const aConstante = data.filter((eachPlanet) => {
      if (comparisonFilter === 'maior que') {
        return Number(eachPlanet[columnFilter]) > Number(valueFilter);
      }
      if (comparisonFilter === 'menor que') {
        return Number(eachPlanet[columnFilter]) < Number(valueFilter);
      }
      if (comparisonFilter === 'igual a') {
        return Number(eachPlanet[columnFilter]) === Number(valueFilter);
      }
      return null;
    });
    setFilteredData(aConstante);
  }

  function selectColumnFilter() {
    return selectColumn
      .map((eachSelect) => (
        <option key={ eachSelect } value={ eachSelect }>{eachSelect}</option>));
  }

  return (
    <>
      <header>
        <input
          type="text"
          placeholder="Filtrar por nome"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </header>
      <section>
        <select data-testid="column-filter" onChange={ takeChangeColumn }>
          {selectColumnFilter()}
        </select>
        <select data-testid="comparison-filter" onChange={ takeComparison }>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input type="number" data-testid="value-filter" onChange={ takeValue } />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ filterButton }
        >
          Filtrar
        </button>
      </section>
    </>
  );
}

export default Header;
