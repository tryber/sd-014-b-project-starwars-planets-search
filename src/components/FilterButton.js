import React from 'react';
import usePlanets from '../effects/usePlanets';

export default function FilterButton() {
  const { selected,
    comparison,
    numberTerm } = usePlanets();
  return (
    <button type="button">
      {`${numberTerm}, ${comparison}, ${selected} `}
    </button>
  );
}
