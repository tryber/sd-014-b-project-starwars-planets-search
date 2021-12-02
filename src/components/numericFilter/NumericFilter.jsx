import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import OrderFilter from '../orderFilter/OrderFilter';

export default function NumericFilter() {
  const { filteredColumns, filterInputs, setInputs,
    setFilterByNumericValues } = useContext(MyContext);

  const handleChange = ({ target: { name, value } }) => {
    setInputs({
      [name]: value,
    });
  };

  const alert = () => (!filterInputs.column
    ? <p style={ { color: 'red' } }>Remova um filro para continar</p> : null);

  const handleFilter = () => {
    setFilterByNumericValues(filterInputs);
    setInputs({ value: '' });
  };

  const dataComparison = ['maior que', 'menor que', 'igual a'];
  return (
    <>

      <form>
        <select
          data-testid="column-filter"
          name="column"
          value={ filterInputs.column }
          onChange={ handleChange }
        >
          {filteredColumns && filteredColumns
            .map((opt, i) => <option key={ i }>{opt}</option>)}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ filterInputs.comparison }
          onChange={ handleChange }
        >
          {dataComparison.map((opt, i) => <option key={ i }>{opt}</option>)}
        </select>
        <label htmlFor="value">
          <input
            id="value"
            name="value"
            value={ filterInputs.value }
            onChange={ handleChange }
            data-testid="value-filter"
            type="number"
            placeholder="type a number"
          />
        </label>
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleFilter }
          disabled={ alert() }
        >
          Filter
        </button>
      </form>
      <OrderFilter />
      {alert()}
    </>
  );
}
