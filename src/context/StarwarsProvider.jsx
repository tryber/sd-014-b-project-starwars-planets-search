import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';
import fetchPlanets from '../services';

function StarwarsProvider({ children }) {
  const [data, setData] = useState({});
  const [tableHeaders, setTableHeaders] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetchPlanets();
      setData(response);
      setTableHeaders(
        Object.keys(response.results[0]).filter((key) => key !== 'residents'),
      );
      setPlanets(response.results);
    };

    getPlanets();
  }, []);

  const contextValue = {
    data,
    tableHeaders,
    planets,
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
