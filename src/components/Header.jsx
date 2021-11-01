import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Header() {
  const {
    setFilters,
    data,
    setPlanetsList } = useContext(MyContext);

  function filterByName({ target }) {
    const nameInput = target.value.toLowerCase();
    const planetsFilteredByName = data
      .filter((planet) => (planet.name.toLowerCase()).includes(nameInput));
    setPlanetsList(planetsFilteredByName);
    setFilters({ filterByName: { name: nameInput } });
  }

  return (
    <input
      type="text"
      placeholder="Filtrar por nome"
      data-testid="name-filter"
      onChange={ filterByName }
      name="name"
    />
  );
}

export default Header;
