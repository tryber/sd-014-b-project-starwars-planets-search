import React, { useContext, useEffect, useState } from 'react';
import PlanetApiContext from '../context/PlanetContext';
import HeaderTable from './HeaderTable';
import Header from './Header';
import TableBody from './TableBody';
// import Filter from './Filter';

function Table() {
  const { dataPlanet } = useContext(PlanetApiContext);
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState('');

  useEffect(() => {
    if (dataPlanet.length > 0) {
      setIsLoading(true);
    }
  }, [dataPlanet]);

  console.log(values);

  function handleChange({ target }) {
    const { name, value } = target;
    setValues({ ...values, filters: { [name]: value } });
  }

  console.log(isLoading);

  return (
    <div>
      <Header />
      <div>
        <label htmlFor="filterName">
          <input
            data-testid="name-filter"
            id="filterName"
            name="filterByName"
            type="text"
            onChange={ handleChange }
            placeholder="Filtrar por nome"
          />
        </label>
      </div>
      <table>
        <thead>
          <HeaderTable />
        </thead>
        <tbody>
          {!values && dataPlanet
            .map((planet, index) => <TableBody key={ index } planet={ planet } />)}
          {values && dataPlanet
            .filter((planet) => planet.name.includes(values.filters.filterByName))
            .map((planet, index) => <TableBody key={ index } planet={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
