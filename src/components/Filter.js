import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../css/Filter.css';

function Filter() {
  const { data, setFilters } = useContext(AppContext);

  const inputChange = ({ target }) => {
    const inputValue = target.value;
    const listOfPlanets = data.filter(
      (planet) => (planet.name.toLowerCase().includes(inputValue)),
    );
    setFilters(listOfPlanets);
  };

  return (
    <header>
      <h1 className="title">StarWars Project</h1>
      <form>
        <label htmlFor="searchInput">
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            onChange={ inputChange }
            data-testid="name-filter"
            placeholder="enter a name of planet"
          />
        </label>
      </form>
    </header>
  );
}

export default Filter;
