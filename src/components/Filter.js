import React, { useContext } from 'react';
import ContextSWP from '../context/ContextSWP';

export default function Filter() {
  const { state, setFilterName } = useContext(ContextSWP);
  if (!state) return null;

  return (
    <form>
      <h1>{state.text}</h1>
      <input
        type="text"
        name="name"
        data-testid="name-filter"
        onChange={ setFilterName }
      />
    </form>
  );
}
