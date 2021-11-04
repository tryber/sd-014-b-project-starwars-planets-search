import React, { useContext } from 'react';
import planetContext from '../Context/planetContext';

function filterBar() {
  const { data } = useContext(planetContext);

  return (
    <select>
      <option value="all">All</option>
    </select>
  );
}

export default filterBar;
