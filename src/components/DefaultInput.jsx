import React from 'react';
import PropTypes from 'prop-types';

function DefaultInput(props) {
  const { type, id, text, onChange, placeholder } = props;
  return (
    <label htmlFor={ id }>
      { text }
      <input
        type={ type }
        id={ id }
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
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

DefaultInput.defaultProps = { text: '', placeholder: '' };

export default DefaultInput;
