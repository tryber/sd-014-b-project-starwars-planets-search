import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

export default function InputText() {
  const { filters, setFilter } = useContext(tableContext);

  const setFilterValue = ({ target: { value } }) => {
    setFilter({ ...filters, filterByName: { name: value } });
  };

  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ (e) => setFilterValue(e) }
    />
  );
}
