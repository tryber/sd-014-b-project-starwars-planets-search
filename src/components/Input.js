import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Input() {
  const { searchTerm, setSearchTerm } = useContext(PlanetsContext);

  return (
    <div>
      <input
        data-testid="value-filter"
        value={ searchTerm }
        type="text"
        onChange={ (e) => {
          setSearchTerm(e.target.value);
        } }
      />
    </div>
  );
}
