import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function Search() {
  const { data, setFilter } = useContext(DataContext);

  const handleChange = ({ target }) => {
    const inputName = target.value;
    const filteredPlanets = data.filter(
      (planet) => (planet.name.toLowerCase().includes(inputName)),
    );
    setFilter(filteredPlanets);
    console.log(filteredPlanets);
  };

  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
        placeholder="Seach a planet"
      />
    </form>
  );
}

export default Search;
