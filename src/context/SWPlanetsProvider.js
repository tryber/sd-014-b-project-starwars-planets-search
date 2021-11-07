import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SWPlanetsContext from './SWPlanetsContext';
import fetchAPI from '../services/fetchAPI';

function SWPlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const search = async () =>{
      const { results } = await fetchAPI();
      setData(results);
    };
    search();
  }, []); // useEffect c/ função e um array vazio: a função será executada similarmente ao `componentDidMount`, rodando apenas uma vez e na montagem do componente.

  const contextValue = {
    data,
  };

  return (
    <SWPlanetsContext.Provider value={ contextValue }>
      { children }
    </SWPlanetsContext.Provider>
  );
}

SWPlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SWPlanetsProvider;
