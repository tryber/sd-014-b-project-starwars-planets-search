import React from 'react';
import PropTypes from 'prop-types';

function DefaultInput(props) {
  const { type, id, name, text, onChange, placeholder } = props;
  return (
    <label htmlFor={ id }>
      { text }
      <input
        type={ type }
        id={ id }
        name={ name }
        data-testid={ id }
        onChange={ onChange }
        placeholder={ placeholder }
      />
    </label>
  );
}

DefaultInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

DefaultInput.defaultProps = { name: '', text: '', placeholder: '' };

export default DefaultInput;
