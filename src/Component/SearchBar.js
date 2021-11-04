import React, { useContext } from 'react';
import planetContext from '../Context/planetContext';

function SearchBar() {
  const { data, setFiltered } = useContext(planetContext);

  const handleChange = ({ target }) => {
    const search = target.value;
    const dataBase = data.filter((planet) => planet.name.includes(search));
    setFiltered(dataBase);
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        data-testid="name-filter"
        placeholder="Search for a planet..."
        onChange={ handleChange }
      />
    </div>
  );
}

export default SearchBar;
