import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function InputName() {
  const { filterName, setFilterName } = useContext(MyContext);

  const handleName = ({ target }) => {
    const { value } = target;
    setFilterName(value);
  };

  return (
    <input
      data-testid="name-filter"
      type="text"
      value={ filterName }
      onChange={ handleName }
    />
  );
}

export default InputName;
