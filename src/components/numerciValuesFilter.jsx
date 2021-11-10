import React, { useContext } from 'react';
import { PlanetsSearchContext } from '../context/MyContext';

export default function NumericValuesFilter() {
  const {
    columns,
    setters: {
      setColumn,
      setComparison,
      setValue,
      setFilterBynumericValues,
    },
    numericValues: { column, comparison, value },
    filters: { filterByNumericValues },

  } = useContext(PlanetsSearchContext);

  const handleClick = () => {
    setFilterBynumericValues([
      ...filterByNumericValues,
      { column, comparison, value },
    ]);
  };

  return (
    <>
      <select
        name="column"
        data-testid="column-filter"
        value={ column }
        onChange={ (e) => setColumn(e.target.value) }
      >
        {columns.map((element, index) => (
          <option
            key={ index }
            value={ element }
          >
            { element }

          </option>
        ))}
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (e) => setComparison(e.target.value) }

      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        type="number"
        name="value"
        value={ value }
        data-testid="value-filter"
        onChange={ (e) => setValue(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }

      >
        Filtrar
      </button>
    </>
  );
}
