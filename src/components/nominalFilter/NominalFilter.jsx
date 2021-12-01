import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import './nominalFilter.css';

export default function NominalFilter() {
  const { setFilterByName } = useContext(MyContext);

  return (
    <form>
      <label htmlFor="name">
        <input
          id="name"
          type="text"
          data-testid="name-filter"
          placeholder="Filter by name"
          onChange={ ({ target: { value } }) => setFilterByName(value) }
        />
      </label>
    </form>
  );
}
