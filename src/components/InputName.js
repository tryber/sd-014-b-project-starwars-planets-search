import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function InputName() {
  const { setFiltersByName, name } = useContext(MyContext);

  const handleName = ({ target }) => {
    const { value } = target;
    setFiltersByName(value);
  };

  return (
    <input
      data-testid="name-filter"
      type="text"
      value={ name }
      onChange={ handleName }
    />
  );
}

export default InputName;
