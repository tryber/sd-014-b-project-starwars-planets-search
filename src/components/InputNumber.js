import React from 'react';
import usePlanets from '../effects/usePlanets';

export default function Input() {
  const { value, setValue } = usePlanets();

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
