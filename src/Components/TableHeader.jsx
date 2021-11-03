import React, { useContext, useState, useEffect } from 'react';

import { MyContext } from '../Context/MyContext';

function TableHeader() {
  const [keysPlanet, setKeysPlanet] = useState([]);
  const { data } = useContext(MyContext);

  const renderHeaders = () => {
    const planetNotResident = Object.keys(data[0]).filter((key) => key !== 'residents');
    setKeysPlanet(planetNotResident);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => renderHeaders(), []);

  return (
    <tr>
      {
        keysPlanet.map((keyPlanet, key) => (
          <th key={ key }>
            { keyPlanet }
          </th>
        ))
      }
    </tr>
  );
}

export default TableHeader;
