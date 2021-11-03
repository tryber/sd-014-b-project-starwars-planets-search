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
      ...filters,
      filterByName: {
        name: search,
      },
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, setFilters]);

  useEffect(() => {
    const { filterByName } = filters;
    const MINUS_ONE = -1;
    if (search.length > 0) {
      const filter = filterByName.name;
      const planets = data.filter((value) => value.name.indexOf(filter) !== MINUS_ONE);
      setData(planets);
    } else if (search.length === 0) {
      requestPlanets();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <section className="m-2">
      <label className="form-label" htmlFor="search">
        <input
          className="form-control"
          data-testid="name-filter"
          id="search"
          name="name"
          onChange={ handleInputSearch }
          placeholder="Search"
        />
      </label>
    </section>
  );
}

export default Search;
