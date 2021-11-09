import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ id, label, onClick }) => (
  <button
    data-testid={ id }
    id={ id }
    type="button"
    onClick={ onClick }
  >
    { label }
  </button>
);

export default Button;

Button.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  id: '',
};
