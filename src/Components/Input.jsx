import React from 'react';

import PropTypes from 'prop-types';

function Input({ id }) {
  return (
    <div>
      Input
      { id }
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
};

Input.defaultProps = {
  id: null,
};

export default Input;
