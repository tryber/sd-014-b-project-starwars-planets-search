import React, {useState, useEffect} from "react";
import tableContext from "./tableContext";
import requestPlanets from '../services/api';

export default function Provider({children}) {

  const [data, setData] = useState({data: {results: [{name: 'oi'}]}});

  useEffect( () => { 
    async function fetchDatasetData() {
      const data = await requestPlanets()
      setData(data);
    }
    fetchDatasetData();
  }, [])

  const contextValue = {
    data,
  }

  return (
    <tableContext.Provider value={contextValue}>
      {children}
    </tableContext.Provider>
  )
}