import React, { useContext } from 'react';
import MyContext from '../MyContext';

export default function Filters() {
  const { contextValue } = useContext(MyContext);
  const { setFilterByName } = contextValue;

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ (event) => setFilterByName({ name: event.target.value }) }
      />
    </div>
  );
}
