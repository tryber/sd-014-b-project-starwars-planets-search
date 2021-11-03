import PropTypes from 'prop-types';
import React from 'react';

export default function Header({ results }) {
  const array = results ? Object.keys(results[0]) : [];
  return (
    <tr role="row">
      {array.map((item, index) => (
        item === 'residents'
          ? <span />
          : <th key={ index } role="columnheader">{item}</th>))}
    </tr>
  );
}

Header.propTypes = {
  results: PropTypes.objectOf(PropTypes.array).isRequired,
};
