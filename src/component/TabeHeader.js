import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';

function TableHeader() {
  const { data } = useContext(MyContext);
  const [objKeys, setObjKeys] = useState([]);

  useEffect(() => {
    const INDEX = 9;
    if (data.length > 0) {
      const header = Object.keys(data[0]);
      header.splice(INDEX, 1);
      setObjKeys(header);
    }
  }, [data]);

  return (
    <tr>
      {
        objKeys.map((key, index) => <th key={ index }>{key}</th>)
      }
    </tr>
  );
}

export default TableHeader;
