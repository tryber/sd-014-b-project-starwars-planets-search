import PropTypes from 'prop-types';
import React from 'react';

function Button({ onclick, dataTestid, name }) {
  return (
    <button type="button" onClick={ onclick } data-testid={ dataTestid }>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default Button;
