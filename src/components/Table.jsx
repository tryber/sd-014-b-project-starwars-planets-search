import React, { useEffect } from 'react';
import getPlanets from '../services/getPlanets';

export default function Table() {
  useEffect(async () => {
    await getPlanets();
  }, []);
  return (
    <div>
      table
    </div>
  );
}
