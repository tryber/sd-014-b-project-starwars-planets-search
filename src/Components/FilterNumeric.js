import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterNumeric() {
  const selectColum = [
    'population', 'orbital period', 'diameter', 'rotation period', 'surface water'];
  const selectEquality = ['maior que', ' menor que', 'igual a'];

  const {
    currentFilter, setCurrentFilter, listPlanets, setListPlanets,
  } = useContext(MyContext);

  const handleChange = ({ target: { name, value } }) => {
    setCurrentFilter({ ...currentFilter, [name]: value });
  };

  const handleClick = () => {
    console.log(currentFilter);
  };

  const { column, comparison, value } = currentFilter;

  return (
    <section>
      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ handleChange }
      >
        {
          selectColum
            .map((columName, index) => <option key={ index }>{ columName }</option>)
        }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ comparison }
        onChange={ handleChange }
      >
        {
          selectEquality
            .map((name, index) => <option key={ index }>{ name }</option>)
        }
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
