import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import tableHeaders from '../utils/tableHeaders';
import Header from './Header';
import { ordenation } from '../utils/filtersFunctions';

function Table() {
  const {
    planets,
    loading,
    handleFilterName,
    filteredByName,
    removedColumn,
    btnFilters,
    handleFilterComparison,
    handleClick,
    filteredByComparison,
    removeItem,
    handleSort,
    handleColunmSort,
    newColunm,
  } = useContext(Context);

  const [renderTable, setRenderTable] = useState([]);

  useEffect(() => {
    setRenderTable(planets);
  }, [planets]);

  useEffect(() => {
    if (filteredByName.length > 0) setRenderTable(filteredByName);
    if (filteredByComparison.length > 0) setRenderTable(filteredByComparison);
  }, [filteredByName, filteredByComparison]);

  function renderTh() {
    return tableHeaders.map((header) => (
      <th key={ header }>{ header }</th>
    ));
  }

  function renderTd() {
    return renderTable.map((data) => (
      <tr key={ data }>
        { Object.values(data).map((iten) => (
          <td key={ iten }>
            { iten }
          </td>
        )) }
      </tr>
    ));
  }

  function renderFilters() {
    return btnFilters.map((column, index) => (
      <span
        key={ index }
        data-testid="filter"
      >
        { column }
        <button
          type="button"
          name={ column }
          onClick={ (e) => removeItem(e) }
        >
          X
        </button>
        { ' ' }
      </span>
    ));
  }

  function handleClicksort({ target: { value } }) {
    if (value === 'ASC') {
      const orderASC = renderTable.sort((a, b) => ordenation(a, b));
      setRenderTable(orderASC);
    }
    if (value === 'DESC') {
      const orderDESC = renderTable.sort((a, b) => ordenation(b, a));
      setRenderTable(orderDESC);
    }
  }

  return (
    <div>
      <Header />
      <form>
        <label htmlFor="name-filter">
          <input
            type="search"
            name="search"
            id="name-filter"
            placeholder="Filrar por nome"
            data-testid="name-filter"
            onChange={ (e) => handleFilterName(e) }
          />
        </label>
        <br />
        <label htmlFor="column-filter">
          <select
            name="column"
            id="column-filter"
            value={ newColunm }
            data-testid="column-filter"
            onChange={ (e) => handleFilterComparison(e) }
          >
            { removedColumn.includes('population') ? '' : (
              <option value="population">population</option>)}
            { removedColumn.includes('orbital_period') ? '' : (
              <option value="orbital_period">orbital_period</option>)}
            { removedColumn.includes('diameter') ? '' : (
              <option value="diameter">diameter</option>)}
            { removedColumn.includes('rotation_period') ? '' : (
              <option value="rotation_period">rotation_period</option>)}
            { removedColumn.includes('surface_water') ? '' : (
              <option value="surface_water">surface_water</option>)}
          </select>
        </label>
        <label htmlFor="value-filter">
          <select
            name="comparison"
            id="value-filter"
            data-testid="comparison-filter"
            onChange={ (e) => handleFilterComparison(e) }
          >
            <option value="maior que" selected>maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="number">
          <input
            type="number"
            name="value"
            id="number"
            data-testid="value-filter"
            onChange={ (e) => handleFilterComparison(e) }
          />
        </label>
        <button
          type="button"
          value=""
          id="filter"
          data-testid="button-filter"
          onClick={ () => handleClick() }
        >
          Filtrar
        </button>
        <label htmlFor="column-sort">
          <select
            data-testid="column-sort"
            id="column-sort"
            onChange={ (e) => handleColunmSort(e) }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="column-sort-input-asc">
          <input
            type="radio"
            name="input-sort"
            value="ASC"
            id="column-sort-input-asc"
            data-testid="column-sort-input-asc"
            onChange={ (e) => handleSort(e) }
            onClick={ (e) => handleClicksort(e) }
          />
          Crescente
        </label>
        <label htmlFor="column-sort-input-desc">
          <input
            type="radio"
            name="input-sort"
            value="DESC"
            id="column-sort-input-desc"
            data-testid="column-sort-input-desc"
            onChange={ (e) => handleSort(e) }
            onClick={ (e) => handleClicksort(e) }
          />
          Decrescente
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
        >
          Ordenar
        </button>
        { renderFilters() }
      </form>
      <table>
        <thead>
          <tr>
            { renderTh() }
          </tr>
        </thead>
        <tbody>
          { !loading ? renderTd() : 'Carregando...' }
        </tbody>
      </table>
    </div>
  );
}
export default Table;
