import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

function Table() {
  const { data } = useContext(MyContext);
  const [fetchTrue, setFetchTrue] = useState(false);

  useEffect(() => {
    if (data.length > 0) setFetchTrue(true);
  }, [data]);

  return (
    <div>
      <table border="1">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {
            fetchTrue && data.map((obj, index) => <TableBody key={ index } obj={ obj } />)
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
