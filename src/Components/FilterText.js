import React, { useState, useEffect, useContext } from 'react';
import Context from '../Context/Context';

function FilterText() {
  const { setData, fetchPlanet } = useContext(Context);
  const [filter, setFilter] = useState({ filterByName: { name: '' } });
  const [data, setDataFilter] = useState([]);

  const fetchPlanets = async () => {
    const dataPlanets = await fetchPlanet();
    setDataFilter(dataPlanets);
  };
  const handleChange = ({ target }) => {
    setFilter({ filterByName: { name: target.value } });
  };

  useEffect(() => {
    fetchPlanets();
    const dataFilter = data.filter(
      (value) => value.name.includes(filter.filterByName.name),
    );
    setData(dataFilter);
  }, [filter.filterByName.name]);

  return (
    <input
      type="text"
      value={ filter.filterByName.name }
      data-testid="name-filter"
      onChange={ handleChange }
    />
  );
}

export default FilterText;
