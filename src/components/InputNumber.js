import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Input() {
  const { numberTerm, setNumberTerm } = useContext(PlanetsContext);

  return (
    <div>
      <input
        data-testid="name-filter"
        value={ numberTerm }
        type="number"
        onChange={ (e) => {
          setNumberTerm(e.target.value);
        } }
      />
    </div>
  );
}
