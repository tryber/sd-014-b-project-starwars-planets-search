import React, { useContext } from 'react';
import { PlanetsSearchContext } from '../context/MyContext';

function NameFilter() {
  const {
    filters: { filterdByName: name },
    setters: { setName },
  } = useContext(PlanetsSearchContext);

  return (
    <label htmlFor="name">
      Name:
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ (e) => setName(e.target.value) }
      />
    </label>
  );
}

export default NameFilter;
