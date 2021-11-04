import PropTypes from 'prop-types';
import React from 'react';

export default function InputText(props) {
  const { handleChange } = props;
  return (
    <div>
      <input type="text" onChange={ handleChange } data-testid="name-filter" />
    </div>
  );
}

InputText.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
