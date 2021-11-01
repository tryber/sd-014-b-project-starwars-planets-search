import React, { useContext } from 'react';
import AppContext from './Context';

function SearchBar() {
  const { data, filtred, setFiltred } = useContext(AppContext);

  function searching({ target }) {
    const word = target.value;
    const array = data.filter((element) => (
      element.name.includes(word)
    ));
    setFiltred(array);
    return console.log(word);
  }

  console.log(filtred);

  return (
    <input
      type="search"
      data-testid="name-filter"
      onChange={ searching }
    />
  );
}

export default SearchBar;
