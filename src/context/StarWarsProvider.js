import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import StarWarsContext from './StarWarsContext';
import requestApi from '../services/api';

function Provider({ children }) {
  const [dataResult, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [inputName, setInputName] = useState();

  async function setApi() {
    const result = await requestApi();
    const data = result.results;
    const resultData = data.map(({ residents, ...value }) => value);
    setData(resultData);
    setKeys(Object.keys(resultData[0]));
  }
  useEffect(() => { setApi(); }, []);

  function setPlanetFilter(inputValue) {
    setInputName(inputValue);
  }

  const filters = {
    filterByName: {
      name: inputName,
    },
  };

  return (
    <StarWarsContext.Provider
      value={ { data: dataResult, keys, filters, setPlanetFilter } }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Provider;
