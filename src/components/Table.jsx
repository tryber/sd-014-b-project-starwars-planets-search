import React, { useEffect } from 'react';
import getPlanets from '../services/getPlanets';

export default function Table() {
  const fetchPlanets = async () => {
    await getPlanets();
  };

  useEffect(() => {
    fetchPlanets();
  }, []);
  return (
    <div>
      table
    </div>
  );
}
