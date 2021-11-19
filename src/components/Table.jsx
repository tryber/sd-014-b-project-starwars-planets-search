import React, { useContext } from 'react';
import Context from '../context/Context';
import tableHeaders from '../utils/tableHeaders';
import Header from './Header';

function Table() {
  const {
    planets,
    loading,
    handleFilterName,
    filteredByName,
    handleFilterComparison,
    handleClick,
    filteredByComparison,
  } = useContext(Context);

  function renderTh() {
    return tableHeaders.map((header) => (
      <th key={ header }>{ header }</th>
    ));
  }

  function renderTd() {
    let renders = [];
    renders = planets;
    if (filteredByName.length >= 1) {
      renders = filteredByName;
    }
    if (filteredByComparison.length >= 1) {
      renders = filteredByComparison;
    }
    console.log(renders);
    return renders.map((data) => (
      <tr key={ data }>
        { Object.values(data).map((iten) => (
          <td key={ iten }>
            { iten }
          </td>
        )) }
      </tr>
    ));
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
            data-testid="column-filter"
            onChange={ (e) => handleFilterComparison(e) }
          >
            <option value="population" selected>population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
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
