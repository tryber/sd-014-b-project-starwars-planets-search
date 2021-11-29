import React, { useContext, useState } from 'react';
import MyContext from '../../context/MyContext';
import './nominalFilter.css';

export default function NominalFilter() {
  const [name, setName] = useState('');
  const { planetsData, setFilteredPlanets, filterByName } = useContext(MyContext);

  const handleFilter = (((value) => {
    setName(value);
    filterByName(value);
    const listPlanets = planetsData.filter(({ name: planetName }) => planetName
      .toLowerCase().includes(value.toLowerCase()));
    setFilteredPlanets(listPlanets);
  }));

  return (
    <form>
      <label htmlFor="name">
        <input
          id="name"
          name="name"
          value={ name }
          type="text"
          data-testid="name-filter"
          placeholder="Filter by name"
          onChange={ ({ target: { value } }) => handleFilter(value) }
        />
      </label>
    </form>
  );
}
