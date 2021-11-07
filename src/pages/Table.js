import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, handleNameChange, handleFiltersChange,
    handleClick } = useContext(StarWarsContext);
  const thContent = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter',
    'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films',
    'Create', 'Edited', 'URL'];
  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Filtrar por nome"
        onChange={ handleNameChange }
      />
      <br />
      <br />
      <select
        name="column"
        onChange={ handleFiltersChange }
        data-testid="column-filter"
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        name="comparison"
        onChange={ handleFiltersChange }
        data-testid="comparison-filter"
      >
        <option>maior que</option>
        <option>igual a</option>
        <option>menor que</option>
      </select>
      <input
        name="value"
        onChange={ handleFiltersChange }
        data-testid="value-filter"
        type="number"
        placeholder="Inserir quantidade"
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
      { data.length > 0
        ? (
          <table>
            <thead>
              <tr>
                { thContent.map((headName) => <th key={ headName }>{ headName }</th>) }
              </tr>
            </thead>
            <tbody>
              { data.map((planet) => (
                <tr key={ planet.name }>
                  <td>{ planet.name }</td>
                  <td>{ planet.rotation_period }</td>
                  <td>{ planet.orbital_period }</td>
                  <td>{ planet.diameter }</td>
                  <td>{ planet.climate}</td>
                  <td>{ planet.gravity }</td>
                  <td>{ planet.terrain}</td>
                  <td>{ planet.surface_water }</td>
                  <td>{ planet.population }</td>
                  <td>{ planet.films }</td>
                  <td>{ planet.created }</td>
                  <td>{ planet.edited }</td>
                  <td>{ planet.url }</td>
                </tr>
              )) }
            </tbody>
          </table>) : 'Loading...'}
    </div>
  );
}

// A tabela foi criada com auxílio de Chris Blakely em https://www.youtube.com/watch?v=dYjdzpZv5yc

export default Table;
