import React, { useContext, useEffect } from 'react';
import Table from '../components/Table';
import PlanetsContext from '../context/PlanetsContext';

function Planets() {
  const { fetchPlanetsApi } = useContext(PlanetsContext);
  useEffect(() => {
    fetchPlanetsApi();
  }, []);
  return (
    <div>
      <Table />
    </div>

  );
}

export default Planets;
