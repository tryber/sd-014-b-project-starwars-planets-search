import React, { useContext, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import PlanetsContext from '../context/PlanetsContext';

function Planets() {
  const { fetchPlanetsApi } = useContext(PlanetsContext);
  useEffect(() => {
    fetchPlanetsApi();
  }, []);
  return (
    <div>
      <SearchBar />
      <Table />
    </div>

  );
}

export default Planets;
