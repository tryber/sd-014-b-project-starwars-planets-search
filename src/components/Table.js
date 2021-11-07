import React, { useContext } from 'react';
import PlanetApiContext from '../context/PlanetContext';
import HeaderTable from './HeaderTable';
import Header from './Header';
import TableBody from './TableBody';
import FilterSelect from './FilterSelect';

function Table() {
  const { dataPlanet, newFilterArray, isNewFilter,
    values, setValues } = useContext(PlanetApiContext);

  function handleChange({ target }) {
    const { name, value } = target;
    setValues({ ...values, filters: { [name]: value } });
  }

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
      <div><FilterSelect /></div>
      <table>
        <thead>
          <HeaderTable />
        </thead>
        <tbody>
          {isNewFilter && newFilterArray
            .map((planet, index) => <TableBody key={ index } planet={ planet } />)}
          {!values && !isNewFilter && dataPlanet
            .map((planet, index) => <TableBody key={ index } planet={ planet } />)}
          {values && !isNewFilter && dataPlanet
            .filter((planet) => planet.name.includes(values.filters.filterByName))
            .map((planet, index) => <TableBody key={ index } planet={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
