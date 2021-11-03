import { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';

function HandleFetchData() {
  const {
    data,
    setCopyData,
    dataInOrder,
    setDataInOrder,
  } = useContext(MyContext);

  const [fetchTrue, setFetchTrue] = useState(false);

  const orderData = () => {
    const MENOS_UM = -1;
    const order = data.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return MENOS_UM;
      return 0;
    });
    setDataInOrder(order);
  };

  useEffect(() => {
    if (data.length > 0) {
      setFetchTrue(true);
      setCopyData([...data]);
      orderData();
    }
  }, [data]);

  return { data, fetchTrue, dataInOrder };
}

export default HandleFetchData;
