import PropTypes from 'prop-types';
import React from 'react';
import myContext from './MyContext';

function Provider({ children }) {
  // const [data, setData] = useState([]);
  const contextValue = {
    // data,
    // setData,
  };
  return (
    <myContext.Provider value={ contextValue }>
      {children}
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Provider;
