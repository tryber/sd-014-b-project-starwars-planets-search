import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

export default function SearchInput() {
  const [query, setQuery] = useState('');
  const { searchState, setSearchState, planets, setTableArray } = useContext(AppContext);

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
    searchState.filters.filterByName = value;
    setSearchState(searchState);
  };

  const filterPlanetsByName = () => {
    const { filterByName } = searchState.filters;
    const filteredResults = planets
      .filter(({ name }) => name.toLowerCase().includes(filterByName.toLowerCase()));
    setTableArray(filteredResults);
  };

  useEffect(() => {
    const { filterByName } = searchState.filters;
    if (filterByName !== '') filterPlanetsByName(); else setTableArray(planets);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchState.filters.filterByName]);

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar por nome"
        data-testid="name-filter"
        value={ query }
        onChange={ handleChange }
      />
    </div>
  );
}
