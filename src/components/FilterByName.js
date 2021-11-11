import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterByName() {
  const { filters: { FilterByName: name },
    setName, setFilteredPlanets, data } = useContext(MyContext);

  function handleChange({ target }) {
    setName(target.value);
    const planetsFiltered = data
      .filter((planet) => planet.name.toLowerCase().includes(target.value.toLowerCase()));
    setFilteredPlanets(planetsFiltered);
  }

  return (
    <section>
      <input
        data-testid="name-filter"
        name="name"
        type="text"
        placeholder="Pesquise por nome"
        value={ name }
        onChange={ handleChange }
      />
    </section>
  );
}

export default FilterByName;
