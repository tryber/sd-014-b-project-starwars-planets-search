import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';
import mockData from '../testData';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState(data);
  const [filterName, setFilterName] = useState('');
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  const fetchPlanets = async () => {
    try {
      const response = await fetch(URL);
      const resolve = await response.json();
      setData(resolve.results);
    } catch (error) {
      setData(mockData.results);
    }
  };

  useEffect(() => {
    fetchPlanets();
    console.log('fetch-planets');
  }, []);

  useEffect(() => {
    setFilter({
      filters: {
        filterByName: {
          name: filterName,
        },
      },
    });
    console.log('filter');
    const filterDataByName = data.filter(({ name }) => (
      name.toLowerCase().includes(filterName.toLowerCase())
    ));
    setDataFilter(filterDataByName);
  }, [data, filterName]);

  const context = {
    data,
    dataFilter,
    filterName,
    setData,
    filter,
    setFilter,
    setFilterName,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
