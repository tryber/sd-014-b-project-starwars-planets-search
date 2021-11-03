import React, { useState, useEffect, useContext } from 'react';
import PlannetsContext from '../context/PlannetsContext';

export default function Table() {
  const context = useContext(PlannetsContext);
  return (
    <div>
      {console.log(context)}
    </div>
  );
}
