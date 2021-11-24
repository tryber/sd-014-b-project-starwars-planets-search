import React, { useContext, useEffect, useState } from 'react';
import NumericFilter from '../components/NumericFilter';
import OrderFilter from '../components/OrderFilter';
import PlanetTableRow from '../components/PlanetTableRow';
import { FilterContext } from '../context/FilterContext';

const fetchPlanets = async (url) => {
  const planets = [];

  const buffer = await fetch(url);
  const response = await buffer.json();

  response.results.forEach((planet) => planets.push(planet));

  if (response.next) {
    const planetsContinuation = await fetchPlanets(response.next);
    planetsContinuation.forEach((planet) => planets.push(planet));
  }

  return planets;
};

function StarWarsPlanets() {
  const [planets, setPlanets] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);

  const {
    filters: { filterByName, filterNumericValues, order },
    setFilterByName,
    setFilterNumericValues,
  } = useContext(FilterContext);

  const sortPlanets = (a, b) => {
    const MINUS = -1;
    const PLUS = 1;
    const EQUAL = 0;

    const planetA = typeof a[order.column] === 'string'
      ? a[order.column].toLowerCase()
      : a[order.column];

    const planetB = typeof b[order.column] === 'string'
      ? b[order.column].toLowerCase()
      : b[order.column];

    if (order.sort === 'ASC') {
      if (planetA > planetB) return PLUS;
      if (planetA < planetB) return MINUS;
      return EQUAL;
    }

    if (planetA < planetB) return PLUS;
    if (planetA > planetB) return MINUS;
    return EQUAL;
  };

  useEffect(() => {
    fetchPlanets('https://swapi-trybe.herokuapp.com/api/planets/').then(
      (response) => setPlanets(response),
    );
  }, []);

  useEffect(() => {
    if (planets[0]) {
      setTableHeaders(
        Object.keys(planets[0]).filter((header) => header !== 'residents'),
      );
    }
  }, [planets]);

  const renderPlanets = () => (
    <tbody>
      {filterNumericValues
        .reduce((toReturn, { column, comparison, value }) => {
          if (!value) return toReturn;

          if (comparison === '>') {
            return toReturn.filter(
              (planet) => parseInt(planet[column], 10) > parseInt(value, 10),
            );
          }

          if (comparison === '<') {
            return toReturn.filter(
              (planet) => parseInt(planet[column], 10) < parseInt(value, 10),
            );
          }

          if (comparison === '=') {
            return toReturn.filter(
              (planet) => parseInt(planet[column], 10) === parseInt(value, 10),
            );
          }

          return toReturn;
        }, planets)
        .map((planet) => {
          const copy = { ...planet };
          delete copy.residents;
          return copy;
        })
        .filter((planet) => {
          const regex = new RegExp(filterByName.name || '', 'i');
          if (filterByName.name) return regex.test(planet.name);

          return true;
        })
        .sort(sortPlanets)
        .map((planet, index) => (
          <PlanetTableRow key={ index } planetInfo={ planet } />
        ))}
    </tbody>
  );

  return (
    <div className="app">
      <input
        value={ filterByName.name }
        onChange={ (e) => setFilterByName({ name: e.target.value }) }
        data-testid="name-filter"
        type="text"
      />
      <NumericFilter />
      <OrderFilter columns={ tableHeaders } />
      <ul>
        {filterNumericValues.map(({ column, comparison, value }, index) => (
          <li data-testid="filter" key={ index }>
            {`${column} ${comparison} ${value}`}
            <button
              onClick={ () => {
                setFilterNumericValues((prev) => prev.filter((el, ind) => ind !== index));
              } }
              type="button"
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={ header }>{header}</th>
            ))}
          </tr>
        </thead>
        {renderPlanets()}
      </table>
    </div>
  );
}

export default StarWarsPlanets;
