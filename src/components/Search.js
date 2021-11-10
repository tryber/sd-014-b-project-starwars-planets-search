import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Search() {
  const {
    filters,
    setFilters,
    inputFilter,
    setInputFilter,
    selectOption,
    setSelectOption,
    comparisonOption,
    setComparisonOption,
    numericFilter,
    setNumericFilter,
  } = useContext(Context);

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column: selectOption,
          comparison: comparisonOption,
          value: numericFilter,
        },
      ],
    });
  };
    // Lógica de filtros numéricos com o auxílio do Riba Jr
  return (
    <section>
      <input
        data-testid="name-filter"
        value={ inputFilter }
        onChange={ ({ target: { value } }) => setInputFilter(value) }
        placeholder="Filtrar por nome"
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => setSelectOption(value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => setComparisonOption(value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        onChange={ ({ target: { value } }) => setNumericFilter(value) }
        type="number"
        value={ numericFilter }
      />
      <button
        data-testid="button-filter"
        onClick={ () => handleClick() }
        type="button"
      >
        Filtrar
      </button>
    </section>
  );
}
