import React, { useState, useEffect, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const TableContext = createContext();

export function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });
  useEffect(() => {
    async function getPlanets() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(url);
      const apiData = await response.json();
      setData(apiData.results);
    }
    getPlanets();
  }, [data.results]);

  function handleClickDeleteFilter(index) {
    const allFilters = filters.filterByNumericValues;
    allFilters.splice(index, 1);
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: allFilters,
    }));
  }
  return (
    <main>
      <TableContext.Provider
        value={ {
          data, setData, filters, setFilters, handleClickDeleteFilter } }
      >
        {children}
      </TableContext.Provider>
    </main>
  );
}
// Hook personalizado = só chamar o useContexto()
function useContexto() {
  const context = useContext(TableContext);
  return context;
}
Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default useContexto;
