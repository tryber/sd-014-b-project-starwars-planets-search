import React, { useContext, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import PlanetsContext from '../context/PlanetsContext';

function Planets() {
  const {
    backup,
    data,
    setData,
    filters,
    filterSort,
    fetchPlanetsApi } = useContext(PlanetsContext);

  useEffect(() => {
    fetchPlanetsApi();
  }, []);

  useEffect(() => {
    const value = filters.filterByName.name;
    if (value.length > 0) {
      const newData = backup.filter(
        ({ name }) => name.toLowerCase().includes(value.toLowerCase()),
      );
      setData(newData);
    } else {
      fetchPlanetsApi();
    }
  }, [filters.filterByName.name]);

  useEffect(() => {
    function sortData() {
      const { column, sort } = filters.order;
      if (sort === 'ASC') {
        const newData = data.sort(
          ({ [column]: a }, { [column]: b }) => (
            filterSort(column) ? a.localeCompare(b) : a - b
          ),
        );
        setData(newData);
      } else if (sort === 'DESC') {
        const newData = data.sort(
          ({ [column]: a }, { [column]: b }) => (
            filterSort(column) ? b.localeCompare(a) : b - a
          ),
        );
        setData(newData);
      }
    }
    sortData();
  }, [data, setData, filters.order]);

  return (
    <div>
      <SearchBar />
      <Table />
    </div>

  );
}

export default Planets;
