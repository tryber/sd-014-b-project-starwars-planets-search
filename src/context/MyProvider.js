import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import { getPlanets } from '../services';

export default function MyProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => setData(await getPlanets()))();
  }, []);

  return (
    <MyContext.Provider value={ data }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
