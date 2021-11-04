import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function SearchBar() {
  const { data, findPlanet, newList } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    const inputSearch = target.value.toUpperCase();
    if (inputSearch.length > 0) {
      findPlanet(inputSearch);
    }

    const gettingList = data
      .filter((planet) => (planet.name.toUpperCase()).includes(inputSearch));
    newList(gettingList);
  };

  return (
    <form>
      <label htmlFor="searchPlanet">
        <input
          onChange={ (event) => handleChange(event) }
          type="text"
          name="searchPlanet"
          id="searchPlanet"
          placeholder="Filtrar por nome"
          data-testid="name-filter"
        />
      </label>
    </form>
  );
}

export default SearchBar;
