import PropTypes from 'prop-types';
import React from 'react';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

function Table({ data }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          { data.map((planet, key) => <TableRow key={ key } planet={ planet } />) }
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Table;
