import React, { useContext } from 'react';
import myContext from '../context/Context';

function NameSearch() {
  const { filters, setFilters, handleFilterName } = useContext(myContext);

  const handleChange = ({ target }) => {
    handleFilterName(target.value);
    setFilters({
      ...filters,
      filtersByName: { name: target.value },
    });
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        placeholder="Digite aqui"
        onChange={ handleChange }
        type="text"
      />
    </div>
  );
}

export default NameSearch;
