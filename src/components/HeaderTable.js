import React, { useContext, useEffect, useState } from 'react';
import PlanetApiContext from '../context/PlanetContext';

function HeaderTable() {
  const { dataPlanet } = useContext(PlanetApiContext);
  const [title, setTitle] = useState([]);
  const DELETE = 9;

  useEffect(() => {
    if (dataPlanet.length > 0) {
      const headerTitle = Object.keys(dataPlanet[0]);
      headerTitle.splice(DELETE, 1);
      setTitle(headerTitle);
    }
  }, [dataPlanet]);

  return (
    <tr>
      {
        title.map((titleName, index) => <th key={ index }>{ titleName }</th>)
      }
    </tr>
  );
}

export default HeaderTable;
