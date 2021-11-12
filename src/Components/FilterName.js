import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterName() {
  const {
    search, setSearch, listPlanets, setListPlanets, resetList } = useContext(MyContext);

  function handlefilterByName(text) {
    const lowerSearch = text.toLowerCase();
    if (text === '') {
      setListPlanets(resetList);
    } else {
      const searchPlanet = listPlanets.filter((planet) => (
        planet.name.toLowerCase().includes(lowerSearch)
      ));
      setSearch({
        ...search,
        filterByName: { name: text },
        filterByNumericValues: [],
      });
      return setListPlanets(searchPlanet);
    }
  }

  return (
    <label htmlFor="planet">
      <input
        data-testid="name-filter"
        tipe="text"
        name="planet"
        placeholder="Encontrar pelo nome do planeta"
        onChange={ ({ target: { value } }) => handlefilterByName(value) }
      />
    </label>
  );
}

export default FilterName;
