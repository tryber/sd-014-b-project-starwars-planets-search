import React from 'react';

import PropTypes from 'prop-types';

function Input({
  className, id, inputName, onChange, type, value, children, placeholder,
}) {
  return (
    <label htmlFor={ id }>
      { children }
      <input
        className={ className }
        id={ id }
        name={ inputName }
        onChange={ onChange }
        placeholder={ placeholder }
        type={ type }
        value={ value }
      />
    </label>
  );
}

Input.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  id: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  id: null,
  placeholder: null,
};

export default Input;
