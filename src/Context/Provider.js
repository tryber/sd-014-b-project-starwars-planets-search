import React, { useState, useEffect, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const TableContext = createContext();

export function Provider({ children }) {
  const [allPlanets, setPlanets] = useState([]);
  useEffect(() => {
    async function getPlanets() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(url);
      const data = await response.json();
      setPlanets(data.results);
    }
    getPlanets();
  }, []);
  return (
    <main>
      <TableContext.Provider value={ { allPlanets } }>
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
