import React, { useContext, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import PlanetsContext from '../context/PlanetsContext';

function Planets() {
  const { data, setData, filters, fetchPlanetsApi } = useContext(PlanetsContext);
  useEffect(() => {
    fetchPlanetsApi();
  }, []);

  useEffect(() => {
    const value = filters.filterByName.name;
    if (value.length > 0) {
      const newData = data.filter(
        ({ name }) => name.toLowerCase().includes(value.toLowerCase()),
      );
      setData(newData);
    } else {
      fetchPlanetsApi();
    }
  }, [filters.filterByName.name]);

  return (
    <div>
      <SearchBar />
      <Table />
    </div>

  );
}

export default Planets;
