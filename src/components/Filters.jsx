import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const columnOptions = ['population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];

const comparisonOptions = ['menor que', 'igual a', 'maior que'];

const Filters = () => {
  const { handleChange, handleSelectOptions,
    handleFilterButtonClick,
    filters: { filterByNumericValues } } = useContext(PlanetsContext);

  const removeColumnOptions = () => {
    if (filterByNumericValues.length !== 0) {
      const columnOptionsFiltered = filterByNumericValues
        .map((filterColumn) => (
          columnOptions.filter((options) => options !== filterColumn.column)
        ));
      return columnOptionsFiltered[0];
    }
    return columnOptions;
  };

  return (
    <div>
      <input
        type="text"
        placeholder="faça sua busca"
        onChange={ ({ target: { value } }) => handleChange(value) }
        data-testid="name-filter"
      />
      <select
        data-testid="column-filter"
        name="column"
        onChange={ ({ target: { name, value } }) => handleSelectOptions(
          name, value,
        ) }
      >
        {removeColumnOptions()
          .map((option, index) => {
            console.log(option);
            return <option key={ index }>{option}</option>;
          })}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ ({ target }) => handleSelectOptions(
          target.name, target.value,
        ) }
      >
        {comparisonOptions
          .map((option, index) => <option key={ index }>{option}</option>)}
      </select>
      <input
        type="number"
        placeholder="insira um valor"
        data-testid="value-filter"
        name="value"
        onChange={ (e) => handleSelectOptions(
          e.target.name, e.target.value,
        ) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleFilterButtonClick() }
      >
        Filtrar
      </button>
    </div>
  );
};

export default Filters;
