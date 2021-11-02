import React from 'react';
import PropTypes from 'prop-types';

export default function Form(props) {
  const {
    filterByName: { name, setName },
    numericValues: [column, comparison, value],
    setters: [setColumn, setComparison, setValue],
    handleFiltering,
    columns,
  } = props;

  return (
    <form>
      <fieldset>
        <input
          data-testid="name-filter"
          type="text"
          name="name"
          placeholder="Filtrar por nome"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
        />
      </fieldset>
      <fieldset>
        <select
          data-testid="column-filter"
          name="column"
          value={ column }
          onChange={ (e) => setColumn(e.target.value) }
        >
          {columns.map((option) => (
            <option key={ option } value={ option }>
              {option}
            </option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ comparison }
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ () => {
            handleFiltering(column, comparison, value);
          } }
        >
          Filtrar
        </button>
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  filterByName: PropTypes.shape({
    name: PropTypes.string,
    setName: PropTypes.func,
  }).isRequired,
  numericValues: PropTypes.arrayOf(PropTypes.any).isRequired,
  setters: PropTypes.arrayOf(PropTypes.func).isRequired,
  handleFiltering: PropTypes.func.isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
};
