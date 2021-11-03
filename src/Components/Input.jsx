import PropTypes from "prop-types"
import React from 'react';

function Input({ id }) {
  return (
    <label htmlFor={ id }>
      Label
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string,
};

Input.defaultProps = {
  id: null,
};

export default Input;
