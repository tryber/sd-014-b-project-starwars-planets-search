import PropTypes from 'prop-types';
import React from 'react';

export default function Select({ options, ...attributes }) {
  return (
    <select
      { ...attributes }
    >
      {options.map((option, index) => <option key={ index }>{option}</option>)}
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
