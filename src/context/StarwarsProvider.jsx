import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';
import fetchPlanets from '../services';

const INITIAL_FILTER = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState(INITIAL_FILTER);

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetchPlanets();
      setData(response.results);
      setTableHeaders(
        Object.keys(response.results[0]).filter((key) => key !== 'residents'),
      );
      setPlanets(response.results);
    };

    getPlanets();
  }, []);

  useEffect(() => {
    if (data) {
      let arrayFilter = data.filter(({ name }) => (
        name.includes(filter.filterByName.name)
      ));

      filter.filterByNumericValues.forEach(({ column, comparison, value }) => {
        switch (comparison) {
        case 'maior que':
          arrayFilter = arrayFilter.filter((planet) => (
            Number(planet[column]) > Number(value)));
          break;
        case 'menor que':
          arrayFilter = arrayFilter.filter((planet) => (
            Number(planet[column]) < Number(value)));
          break;
        default:
          arrayFilter = arrayFilter.filter((planet) => (
            Number(planet[column]) === Number(value)));
        }
      });

      setPlanets(arrayFilter);
    }
  }, [data, filter]);

  const contextValue = {
    data,
    tableHeaders,
    planets,
    filter,
    setFilter,
  };

  return (
    <StarwarsContext.Provider value={ contextValue }>
      { children }
    </StarwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarwarsProvider;
