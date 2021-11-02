import React from 'react';
import PropTypes from 'prop-types';

export default function Form(props) {
  const {
    filters: {
      filterByName: { name, setName },
      filterByNumericValues: [
        { column, setColumn, comparison, setComparison, value, setValue },
      ],
    },
    handleFiltering,
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
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
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
          onClick={ handleFiltering }
        >
          Filtrar
        </button>
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  filters: PropTypes.shape({
    filterByName: PropTypes.shape({
      name: PropTypes.string,
      setName: PropTypes.func,
    }),
    filterByNumericValues: PropTypes.arrayOf(
      PropTypes.shape({
        column: PropTypes.string,
        setColumn: PropTypes.func,
        comparison: PropTypes.string,
        setComparison: PropTypes.func,
        value: PropTypes.number,
        setValue: PropTypes.func,
      }),
    ),
  }).isRequired,
  handleFiltering: PropTypes.func.isRequired,
};
