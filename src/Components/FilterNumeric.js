import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterNumeric() {
  const selectColum = [
    'population', 'orbital period', 'diameter', 'rotation period', 'surface water'];
  const selectEquality = ['maior que', ' menor que', 'igual a'];

  const {
    currentFilter, setCurrentFilter, listPlanets, setListPlanets, resetList,
  } = useContext(MyContext);

  function handleChange({ target: { name, value } }) {
    setCurrentFilter({ ...currentFilter, [name]: value });
  }

  function handleFilterNumeric({ comparison, column, value }) {
    switch (comparison) {
    case 'maior que':
      return setListPlanets(listPlanets
        .filter((planet) => Number(planet[column]) > Number(value)));

    case 'menor que':
      return setListPlanets(listPlanets
        .filter((planet) => Number(planet[column]) < Number(value)));

    case 'igual a':
      return setListPlanets(listPlanets
        .filter((planet) => Number(planet[column]) === Number(value)));

    default:
      return resetList;
    }
  }

  function handleClick() {
    console.log(currentFilter);
    handleFilterNumeric(currentFilter);
  }

  const { column, comparison, value } = currentFilter;

  return (
    <section>
      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ handleChange }
      >
        { selectColum
          .map((columName, index) => <option key={ index }>{ columName }</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ comparison }
        onChange={ handleChange }
      >
        {selectEquality
          .map((name, index) => <option key={ index }>{ name }</option>)}
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        value={ value }
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filtrar
      </button>
    </section>
  );
}

export default FilterNumeric;
