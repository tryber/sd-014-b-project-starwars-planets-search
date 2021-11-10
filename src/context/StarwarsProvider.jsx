import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';
import fetchPlanets from '../services';

const INITIAL_FILTER = {
  filterByName: { name: '' },
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
      const filterName = data.filter(({ name }) => (
        name.includes(filter.filterByName.name)
      ));

      setPlanets(filterName);
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
