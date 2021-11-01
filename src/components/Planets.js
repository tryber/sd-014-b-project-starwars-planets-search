import React, { useEffect, useState } from 'react';
// import { NewContext } from '../context/NewContext';
import getDataByPlanets from '../services/ApiPlanets';
import TablePlanets from './TablePlanets';

function Planets() {
  const [titlePlanets, setTitlePlanets] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDataByPlanets().then((data) => {
      const getPlanets = data.results.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setTitlePlanets(Object.keys(getPlanets[0]));
      setPlanets(getPlanets);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      {loading ? null
        : <TablePlanets planets={ planets } titlePlanets={ titlePlanets } />}
    </div>
  );
}

export default Planets;
