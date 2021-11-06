import React, { useContext } from 'react';
import Context from '../context/context';

function Header() {
  const { setSearch, data } = useContext(Context);
  const getSearch = (event) => {
    const { value } = event.target;
    if (value !== '') {
      const findElement = data.filter((name) => (
        name.name.includes(value[0].toUpperCase())
      ));
      return setSearch(findElement);
    }
    return setSearch(data);
  };
  return (

    <label htmlFor="search">
      Pesquise por planetas:
      <input
        type="search"
        id="search"
        onChange={ getSearch }
        data-testid="name-filter"
      />
    </label>
  );
}

export default Header;
