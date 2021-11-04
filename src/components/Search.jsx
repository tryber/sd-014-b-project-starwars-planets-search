import React, { useContext, useState } from 'react';
import MyContext from '../context-api/MyContext';

function Search() {
  const [inputSearch, setSearch] = useState('');
  const { data, setFiltredArray, setFilters, filters } = useContext(MyContext);

  const filterByName = (input) => {
    const filtred = data.filter((element) => element.name.includes(input));
    setFiltredArray(filtred);
  };

  return (
    <form>
      <input
        value={ inputSearch }
        data-testid="name-filter"
        placeholder="Filtrar por nome"
        onChange={ ({ target: { value } }) => {
          setSearch(value);
          filterByName(value);
          setFilters({ ...filters,
            filterByName: {
              name: value,
            } });
        } }
      />
    </form>

  );
}

export default Search;
