import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Search() {
  const [search, setSearch] = useState('');
  const {
    data,
    setData,
    filters,
    setFilters,
    requestPlanets } = useContext(PlanetsContext);

  function handleInputSearch({ target }) {
    const { value } = target;
    setSearch(value);
  }

  useEffect(() => {
    setFilters({
      filterByName: {
        name: search,
      },
    });
  }, [search, setFilters]);

  useEffect(() => {
    const MINUS_ONE = -1;
    if (search.length > 0) {
      const filter = filters.filterByName.name;
      const planets = data.filter((value) => value.name.indexOf(filter) !== MINUS_ONE);
      setData(planets);
    } else {
      requestPlanets();
    }
  }, [filters]);

  return (
    <section>
      <label className="form-label m-2" htmlFor="search">
        <input
          className="form-control"
          data-testid="name-filter"
          id="search"
          name="search"
          onChange={ handleInputSearch }
          placeholder="Search"
        />
      </label>
    </section>
  );
}

export default Search;
