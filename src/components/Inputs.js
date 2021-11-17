import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Inputs() {
  const { setFiltersByName, name } = useContext(MyContext);

  const handleClick = ({ target }) => {
    const { value } = target;
    setFiltersByName(value);
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ name }
        onChange={ handleClick }
      />
    </div>
  );
}

export default Inputs;
