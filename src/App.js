import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [planetList, setPlanets] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('');

  // componentDidMount
  useEffect(() => {
    async function fetchData() {
      const { results: planets } = await (await fetch(URL)).json();
      setPlanets(planets);
    }
    fetchData();
  }, []);

  // Código visto no site abaixo para criar tabelas dinâmicas
  // https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
  // https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/th
  function renderTableHeader() {
    if (planetList.length > 0) {
      const header = Object.keys(planetList[0]);
      const headerFilter = header.filter(((item) => item !== 'residents'));
      return headerFilter.map((key, index) => {
        const headerKey = key.split('_').join(' ').toUpperCase();
        return (<th key={ index } scope="col">{headerKey}</th>);
      });
    }
  }

  // código abaixo visto no vídeo https://www.youtube.com/watch?v=d1r0aK5awWk&ab_channel=devmentorlive
  // Searching/Filtering a Datatable in React
  function search(rows) {
    const firstLetter = -1;
    const textFilter = rows
      .filter((row) => row.name.toLowerCase()
        .indexOf(nameFilter.toLowerCase()) > firstLetter);
    return textFilter;
  }

  function filterNumericValues(rows) {
    const textFilter = search(rows);
    const numericFilter = textFilter.filter((row) => {
      switch (comparisonFilter) {
      case 'maior que':
        return Number(row[columnFilter]) > Number(valueFilter);

      case 'menor que':
        return Number(row[columnFilter]) < Number(valueFilter);

      case 'igual a':
        return Number(row[columnFilter]) === Number(valueFilter);

      default:
        return row;
      }
    });
    setPlanets(numericFilter);
  }

  function renderTableData() {
    if (planetList.length > 0) {
      return search(planetList).map((data, index) => {
        const {
          name,
          rotation_period: rotationPeriod,
          orbital_period: orbitalPeriod,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water: surfaceWater,
          population,
          films,
          created,
          edited,
          url } = data;
        return (
          <tr key={ index }>
            <td>{name}</td>
            <td>{rotationPeriod}</td>
            <td>{orbitalPeriod}</td>
            <td>{diameter}</td>
            <td>{climate}</td>
            <td>{gravity}</td>
            <td>{terrain}</td>
            <td>{surfaceWater}</td>
            <td>{population}</td>
            <td>{films}</td>
            <td>{created}</td>
            <td>{edited}</td>
            <td>{url}</td>
          </tr>
        );
      });
    }
  }

  function renderHeaderInputs() {
    return (
      <input
        type="text"
        placeholder="Filtar por nome"
        data-testid="name-filter"
        value={ nameFilter }
        onChange={ ({ target }) => setNameFilter(target.value) }
      />
    );
  }

  function renderDropdownSelectors() {
    return (
      <>
        <select
          data-testid="column-filter"
          value={ columnFilter }
          onChange={ (e) => setColumnFilter(e.target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          value={ comparisonFilter }
          onChange={ (e) => setComparisonFilter(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          value={ valueFilter }
          onChange={ (e) => setValueFilter(e.target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => filterNumericValues(planetList) }
        >
          Filtrar

        </button>
      </>
    );
  }

  return (
    <main>
      <header>
        <h1>Projeto Star Wars - Planet Search</h1>
        {renderHeaderInputs()}
        {renderDropdownSelectors()}
      </header>
      <section>
        <table>
          <tbody>
            <tr>{renderTableHeader()}</tr>
          </tbody>
          <tbody>
            {renderTableData()}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default App;
