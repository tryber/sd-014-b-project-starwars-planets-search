import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [planetList, setPlanets] = useState([]);

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

  function renderTableData() {
    if (planetList.length > 0) {
      return planetList.map((data, index) => {
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

  return (
    <main>
      <header>
        <h1>Projeto Star Wars - Planet Search</h1>
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
