import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';

function SearchBar() {
  const { setFilters, filteredData, setFilteredData, data } = useContext(AppContext);
  const [name, setName] = useState({ name: '' });

  const applyFilter = () => {
    const search = data.filter((planet) => planet.name.includes(name.name));
    setFilteredData(search);
  };

  useEffect(() => {
    setFilters({ filterByName: name });
    applyFilter();
    console.log('Filtrou');
    console.log(filteredData);
    if (!name.name) {
      setFilteredData(data);
    }
  }, [name]);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ name.name }
        onChange={ (e) => {
          setName({ name: e.target.value });
        } }
        placeholder="Digite para pesquisar"
      />
      <br />
      <br />
    </div>
  );
}

export default SearchBar;
