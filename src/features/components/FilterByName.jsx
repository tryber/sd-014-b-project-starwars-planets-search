import React, { useContext } from 'react';
import { PlanetFinderContext } from '../../context/PlanetFinderContext';

export default function FilterByName() {
  const {
    filters: { FilterByName: name },
    setters: { setName },
  } = useContext(PlanetFinderContext);

  return (
    <fieldset>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Filtrar por nome"
        value={ name }
        onChange={ (e) => setName(e.target.value) }
      />
    </fieldset>
  );
}
