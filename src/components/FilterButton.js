import React from 'react';

export default function FilterButton() {
  const { selected,
    comparison,
    numberTerm } = useContext(PlanetsContext);
  return (
    <button type="button">
      {`${numberTerm}, ${comparison}, ${selected} `}
    </button>
  );
}
