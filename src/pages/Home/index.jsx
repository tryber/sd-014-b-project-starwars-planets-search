import React, { useContext } from 'react';
import Table from '../../Components/Table';
import GlobalContext from '../../Context/GlobalContext';
import { treatKeys } from '../../helpers/stringTreatment';

export default function Home() {
  const { data, loading } = useContext(GlobalContext);

  return (
    <main>
      {
        loading
          ? 'Loading, wait...'
          : <Table data={ data } headerLine={ treatKeys(data) } />
      }
    </main>
  );
}
