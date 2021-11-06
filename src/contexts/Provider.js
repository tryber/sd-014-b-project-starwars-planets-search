import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';
import fetchData from '../helpers/planetsAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filterByNumericValues, setNumericFilters] = useState([]);
  // const [columnOptions, setColumnOptions] = useState([
  //   'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  // ]);
  const [usedColumnOptions, setUsedColumnOptions] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  useEffect(() => {
    const getData = async () => {
      const planets = await fetchData();
      console.log(planets);
      setData(planets.results);
      setFilteredPlanets(planets.results);
    };
    getData();
  }, []);

  useEffect(() => {
    const filteredData = data.filter((planet) => planet.name.toLowerCase()
      .includes(name.toLowerCase()));
    setFilteredPlanets(filteredData);
  }, [data, name]);

  const manageColumnOptions = (col, options) => {
    const newColumnOptions = options.filter((option) => option !== col);
    setUsedColumnOptions(newColumnOptions);
  };

  const createNewNumericFilter = (col, comp, val) => {
    const newNumericFilter = {
      column: col,
      comparison: comp,
      value: val,
    };
    setNumericFilters([...filterByNumericValues, newNumericFilter]);
    manageColumnOptions(col, usedColumnOptions);
    setColumn('population');
    setComparison('maior que');
    setValue(0);
  };

  const removeNumericFilter = (col, index) => {
    const newNumericFilterArray = filterByNumericValues
      .filter((filter, i) => i !== index);
    setNumericFilters(newNumericFilterArray);
    setUsedColumnOptions([...usedColumnOptions, col]);
  };

  const contextValue = {
    data,
    filteredPlanets,
    filters:
    {
      filterByName: { name },
      filterByNumericValues,
    },
    column,
    usedColumnOptions,
    comparison,
    value,
    setName,
    setColumn,
    setUsedColumnOptions,
    setComparison,
    setValue,
    createNewNumericFilter,
    removeNumericFilter,
    // filterByCustomSetting,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
