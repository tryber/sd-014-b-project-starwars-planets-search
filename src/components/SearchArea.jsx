import React from 'react';
// import StarWarsContext from '../context/StarWarsContext';

function SearchArea() {
  // const { filters } = useContext(StarWarsContext);
  // const [filteredSearch, setFilteredSearch] = useState('');
  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Search a especific planet"
        value="aa"
        onChange={ ({ target: { value } }) => {
          setFilteredSearch(value);
        } }
      />
    </section>
  );
}

export default SearchArea;
