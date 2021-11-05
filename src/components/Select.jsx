import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { array, dataTestID, onChange, value } = this.props;
    return (
      <select onChange={ onChange } value={ value } data-testid={ dataTestID }>
        { array.map((option) => <option key={ option }>{option}</option>)}
      </select>
    );
  }
}

Select.propTypes = {
  array: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  dataTestID: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
