import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Input() {
  const { value, setValue } = useContext(PlanetsContext);

  return (
    <div>
      <input
        data-testid="value-filter"
        value={ value }
        type="number"
        onChange={ (e) => setValue(e.target.value) }
      />
    </div>
  );
}
