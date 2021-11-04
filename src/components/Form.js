import React, { useContext } from 'react';
import StarContext from '../context/Context';

const FilterPlanet = () => {
  const {
    setName,
    setColumn,
    setComparison,
    setObjectNumerics,
    setValueSearch,
    setFilterByNumericValues,
    setFilters,
    setOptionsColumn,
    objectNumerics,
    filterByNumericValues,
    filters,
    nameState,
    columnState,
    comparisonState,
    optionsColumn,
    valueState,
  } = useContext(StarContext);

  const optionsComparison = [
    'maior que',
    'igual a',
    'menor que',
  ];

  const handleName = ({ target }) => {
    const { value } = target;
    setName({ name: value.toLowerCase() });
  };

  const handleColumn = ({ target }) => {
    const { value } = target;
    setColumn(value);
    setObjectNumerics({
      ...objectNumerics,
      column: value,
    });
  };

  const handleComparison = ({ target }) => {
    const { value } = target;
    setComparison(value);
    setObjectNumerics({
      ...objectNumerics,
      comparison: value,
    });
  };

  const handleValue = ({ target }) => {
    const { value } = target;
    setValueSearch(value);
    setObjectNumerics({
      ...objectNumerics,
      value,
    });
  };

  const handleClick = () => {
    setFilterByNumericValues([...filterByNumericValues, objectNumerics]);
    setFilters({
      ...filters,
      filterByNumericValues,
    });
    const columns = optionsColumn.filter((option) => !option
      .includes(columnState));
    setOptionsColumn([...columns]);
  };

  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ handleName }
        placeholder="Search"
        value={ nameState.name }
      />
      <select
        data-testid="column-filter"
        onChange={ handleColumn }
        value={ columnState }
      >
        { optionsColumn && optionsColumn.map((optionColmun) => (
          <option
            key={ optionColmun }
            value={ optionColmun }
          >
            { optionColmun }
          </option>
        )) }
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleComparison }
        value={ comparisonState }
      >
        {
          optionsComparison.map((comparison) => (
            <option
              key={ comparison }
              value={ comparison }
            >
              { comparison }
            </option>
          ))
        }
      </select>
      <input
        data-testid="value-filter"
        type="text"
        value={ valueState }
        onChange={ handleValue }
        placeholder="Search"
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }

      >
        Filter
      </button>
    </form>
  );
};

export default FilterPlanet;
