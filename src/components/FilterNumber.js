import React, { useContext, useState } from 'react';
import './table.css';
import DataContext from '../context/DataContext';
import response from '../testData';

function FilterNumber() {
  const {
    setColumn, comparison,
    column, valor, setComparison, setData,
    setValor, selectedFilter,
    filters, filtroNumero } = useContext(DataContext);

  const [filtroNovo, setFiltroNovo] = useState(filtroNumero);

  function alteraColuna() {
    const filtrarColuna = filtroNovo.filter((coluna) => coluna !== column);
    setFiltroNovo(filtrarColuna);
  }

  function filterList() {
    const filterNumber = response.results.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(valor);
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(valor);
      }
      if (comparison === 'igual a') {
        return planet[column] === valor;
      }
      return planet;
    });
    setData(filterNumber);
    alteraColuna();
  }

  return (
    <div>
      <label htmlFor="columnFilter">
        <select
          id="columnFilter"
          data-testid="column-filter"
          onChange={ (event) => setColumn(event.target.value) }
        >
          {filtroNovo.map((colunas, index) => <option key={ index }>{colunas}</option>)}
        </select>
      </label>
      <label htmlFor="comparisonFilter">
        <select
          id="comparisonFilter"
          data-testid="comparison-filter"
          onChange={ (event) => setComparison(event.target.value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="valueFilter">
        <input
          id="valueFilter"
          data-testid="value-filter"
          onChange={ (event) => setValor(event.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => filterList() }
      >
        Filtrar
      </button>
      {filters === true && selectedFilter.map((filtro, index) => (
        <p key={ index }>{ filtro }</p>))}
    </div>
  );
}

export default FilterNumber;
