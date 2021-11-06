import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ labelText, type, name, id, placeholder, onChange }) {
  return (
    <label htmlFor={ name }>
      { labelText }
      <input
        type={ type }
        name={ name }
        id={ id }
        placeholder={ placeholder }
        onChange={ onChange }
      />
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  labelText: '',
  placeholder: '',
};
