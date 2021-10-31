import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';

const initialState = {
  filters:
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
    },
};

function Provider({ children }) {
  const [filter, setFilter] = useState(initialState);
  return (
    <AppContext.Provider value={ { filter, setFilter } }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
