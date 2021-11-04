import React, { useContext } from 'react';
import Input from './Input';
import PlanetsContext from '../context/PlanetsContext';
import Select from './Select';
import Button from './Button';
import InputRadio from './InputRadio';

function SearchBar() {
  const {
    handleChangeByNameValues,
    handleChangeByNumericValues,
    handleChangeByOrderValues,
    handleFilterByNumericValues,
    handleRemoveFilter,
    handleByOrder,
    filterByNumericValues,
    order,
    filters: { filterByName, filterByNumericValues: filterByNumericValuesFilter },
    selectOptions: { columnOptions, comparisonOptions, columnSortOptions },
  } = useContext(PlanetsContext);
  return (
    <div>
      <h1>Projeto Star Wars - Trybe </h1>
      <Input
        id="name"
        type="text"
        label=""
        value={ filterByName.name }
        placeholder="Filtrar por nome"
        dataTestid="name-filter"
        onchange={ handleChangeByNameValues }
      />
      <Select
        id="column"
        value={ filterByNumericValues.column }
        dataTestid="column-filter"
        onchange={ handleChangeByNumericValues }
        options={ columnOptions }
      />
      <Select
        id="comparison"
        value={ filterByNumericValues.comparison }
        dataTestid="comparison-filter"
        onchange={ handleChangeByNumericValues }
        options={ comparisonOptions }
      />
      <Input
        id="value"
        type="number"
        label=""
        value={ filterByNumericValues.value }
        placeholder="0"
        dataTestid="value-filter"
        onchange={ handleChangeByNumericValues }
      />
      <Button
        name="Filtrar"
        dataTestid="button-filter"
        onclick={ handleFilterByNumericValues }
      />
      <Select
        id="column"
        label="Ordenar: "
        value={ order.column }
        dataTestid="column-sort"
        onchange={ handleChangeByOrderValues }
        options={ columnSortOptions }
      />
      <InputRadio
        id="sort"
        type="radio"
        label="Ascendente"
        value="ASC"
        dataTestid="column-sort-input-asc"
        onclick={ handleChangeByOrderValues }
      />
      <InputRadio
        id="sort"
        type="radio"
        label="Descendente"
        value="DESC"
        dataTestid="column-sort-input-desc"
        onclick={ handleChangeByOrderValues }
      />
      <Button
        name="Ordenar"
        dataTestid="column-sort-button"
        onclick={ handleByOrder }
      />
      { filterByNumericValuesFilter.map(({ column, comparison, value }, index) => (
        <div key={ `${index}-${column}` } data-testid="filter">
          {`${column}-${comparison}-${value}`}
          <button onClick={ () => handleRemoveFilter(column) } type="button">X</button>
        </div>
      ))}
    </div>
  );
}

export default SearchBar;
