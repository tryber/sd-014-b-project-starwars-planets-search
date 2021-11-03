import React, { useContext } from 'react';
import AppContext from '../context';

export default function Search() {
  const { data, setFilterInput } = useContext(AppContext);

  const handleFilterInput = ({ target }) => {
    const inputValue = target.value.toLowerCase();
    const filteredArray = data
      .filter((element) => element.name.includes(inputValue.toLowerCase()));

    setFilterInput(filteredArray);
  };

  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleFilterInput }
      />
    </form>
  );
}
