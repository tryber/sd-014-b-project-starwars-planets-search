import React from 'react';
import PropTypes from 'prop-types';

function DefaultSelect({ name, contents, value, testid, change }) {
  return (
    <select name={ name } onChange={ change } value={ value } data-testid={ testid }>
      { contents.map((content) => (
        <option key={ content } value={ content }>{ content }</option>
      )) }
    </select>
  );
}

DefaultSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  contents: PropTypes.arrayOf(PropTypes.any).isRequired,
  change: PropTypes.func.isRequired,
};

export default DefaultSelect;
