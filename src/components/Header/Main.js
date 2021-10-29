import React, { useContext } from 'react';
import Context from '../../context/Context';


function Header() {
  const { filters,
    setFilters,
    filterOptions,
    setFilterOptions,
  } = useContext(Context);

  const { filterByNumericValues } = filters;

  const columns = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

  const handleChange = ({ target: { name, value } }) => {
    setFilterOptions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = (filterOption) => {
    setFilters((prevState) => {
      if (!prevState.filterByNumericValues.length) {
        return { ...prevState,
          filterByNumericValues: [{
            ...filterOption,
          },
          ] };
      } return { ...prevState,
        filterByNumericValues:
         [...prevState.filterByNumericValues,
           { ...filterOption }] };
    });
  };

  const setColumnsOptions = () => {
    let copyColumns = columns;
    const optionColumn = filterByNumericValues.map(({ column }) => column);
    optionColumn.forEach(
      (item) => {
        copyColumns = copyColumns.filter(
          (col) => col !== item,
        );
      },
    );
    return copyColumns;
  };


  return (
    <header>
      <h1> StarWars Planets </h1>
      <form>
        <div>
          <label htmlFor="filterByName">
            Filter By Name:
            <input
              id="filterByName"
              data-testid="name-filter"
              onChange={ ({ target: { value } }) => setFilters({
                ...filters,
                filterByName: {
                  name: value,
                },
              }) }
            />
          </label>
        </div>
          <input
            type="number"
            data-testid="value-filter"
            name="value"
            value={ filterOptions.value }
            onChange={ handleChange }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ () => handleClick(filterOptions) }
          >
            Filtrar
          </button>
        </div>
        <div>
          <RenderFilters
            filters={ filterByNumericValues }
            handleClick={ handleRemoveFilter }
          />
        </div>
      </form>
    </header>
  );
}
export default Header;
