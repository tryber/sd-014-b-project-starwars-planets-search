import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

export default function SearchBar() {
  const { data, setDataFilter } = useContext(MyContext);

  function filterByName({ target: { value } }) {
    const filterByName2 = data.filter((val) => (
      val.name.toLowerCase().includes(value.toLowerCase())
    ));
    setDataFilter(filterByName2);
    console.log(filterByName2);
  }

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ filterByName }
      />
    </div>
  );
}
