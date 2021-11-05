import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ labelText, type, name, id, placeholder, onChange }) {
  return (
    <label htmlFor={ name }>
      { labelText }
      <Input
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
  labelText: string.isRequired,
  name: string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: string.isRequired,
  type: string.isRequired,
};
