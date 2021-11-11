import React, { useContext, useState } from 'react';
import Context from '../Context/Context';

export default function SearchBar() {
  const {
    filters,
    setFilters,
    inputFilter,
    setInputFilter,
    column,
    setColumn,
    comparison,
    setComparison,
    numericFilter,
    setNumericFilter,
  } = useContext(Context);
  // Logica feita com muita ajuda do Nasser

  const columnOptions = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const [options, setOptions] = useState(columnOptions);

  function removeOption() {
    setOptions(options.filter((option) => option !== column));
  }

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column,
          comparison,
          value: numericFilter,
        },
      ],
    });
    removeOption();
    setColumn(options[0]);
  };

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
        onChange={ ({ target: { value } }) => setColumn(value) }
      >
        {options.map((option, index) => <option key={ index }>{option}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => setComparison(value) }
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
