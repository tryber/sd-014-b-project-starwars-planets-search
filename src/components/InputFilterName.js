import React, { useContext } from 'react';
import AppContext from '../context/Context';

function InputFilterName() {
  const { filter: { filters: { filterByName: { nameFilter } } },
    setFilter } = useContext(AppContext);
  const { filter } = useContext(AppContext);
  return (
    <>
      <input
        type="text"
        placeholder="Filtar por nome"
        data-testid="name-filter"
        value={ nameFilter }
        onChange={ ({ target }) => setFilter(
          { filters: { filterByName: { nameFilter: target.value } } },
        ) }
      />
      {console.log(filter)}
      <input type="text" placeholder="" />
    </>
  );
}

export default InputFilterName;
