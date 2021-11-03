import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

const Input = ({ id, name, placeholder, type, value }) => {
  const { filterByName } = useContext(StarWarsContext);
  return (
    <label htmlFor={ id }>
      <input
        data-testid={ id }
        id={ id }
        name={ name }
        onChange={ ({ target }) => filterByName(target.value) }
        placeholder={ placeholder }
        type={ type }
        value={ value }
      />
    </label>
  );
};

export default Input;

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  placeholder: '',
};
