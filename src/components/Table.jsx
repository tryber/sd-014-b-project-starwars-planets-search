import React, {useContext, useEffect, useState} from "react";
import tableContext from "../context/tableContext";
import Header from "./Header";
import TableLine from "./TableLine";
export default function Table() {

  const {data: {results}} = useContext(tableContext);
  
  return (
    <table>
      <Header results={results} />
      {results ? 
      results.map((item) => <TableLine item={item} />) 
      : <span></span>}
    </table>
  )
}