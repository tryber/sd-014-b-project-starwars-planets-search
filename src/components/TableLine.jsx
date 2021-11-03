import React from "react";

export default function TableLine({item}) {
  const values = item ? Object.values(item) : [];
  return (
      <tr role="row">
        {values.map((valueItem, index) => 
          index === 9 ? <span></span> : <th key={index} role="rowgroup">{valueItem}</th>
        )}
      </tr>
  )

}