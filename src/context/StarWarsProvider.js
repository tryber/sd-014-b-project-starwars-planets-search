import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import StarWarsContext from './StarWarsContext';
import StarWarsFetchApi from '../services/StarWarsFetchApi';

export default function StarWarsProvider({ children }) {
  // define o estado que será usado para armazenar as informações
  const [data, setData] = useState([]);
  const [inputNameFilter, setInputNameFilter] = useState('');

  async function starWarsDataApi() {
    const resultApi = await StarWarsFetchApi();
    setData(resultApi.results);
    // console.log(resultApi.results);
  }

  useEffect(() => {
    starWarsDataApi();
  }, []);

  const initialContex = {
    data,
    setData,
    filters: {
      filterByName: {
        name: inputNameFilter,
      },
    },
    setInputNameFilter,
  };

  return (
    <StarWarsContext.Provider value={ initialContex }>
      { children }
    </StarWarsContext.Provider>
    /* deixando as propriedades do value disponivel para os outros componentes terem acesso */
  /* children se refere que qualquer componente filho deste todoProvider será renderizado aqui */

  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
