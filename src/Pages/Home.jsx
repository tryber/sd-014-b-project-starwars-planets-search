import React, { useContext } from 'react';
import { PlanetContext } from '../context/PlanetProvider';

export default function Home() {
  const planets = useContext(PlanetContext);
  console.log(planets);
  return <>Home</>;
}
