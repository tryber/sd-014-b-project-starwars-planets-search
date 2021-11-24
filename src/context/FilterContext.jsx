import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const FilterContext = createContext({});

export const FilterProvider = ({ children }) => {
  const [filterByName, setFilterByName] = useState({});
  const [filterNumericValues, setFilterNumericValues] = useState([]);
  const [order, setOrder] = useState({ column: 'name', sort: 'ASC' });

  // { column: '', comparison: '', value: '' },

  return (
    <FilterContext.Provider
      value={ {
        filters: { filterByName, filterNumericValues, order },
        setFilterByName,
        setFilterNumericValues,
        setOrder,
      } }
    >
      {children}
    </FilterContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
