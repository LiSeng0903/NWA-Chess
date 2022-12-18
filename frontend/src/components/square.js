import React from 'react'
import './square.css'

// function Square(props) {
//   return (
//     <div className={`square ${props.color}`}>
//     </div>
//   );
// }

export default function Square( { rowIdx, colIdx, color } ) {
  const colorID = 'square.' + color.toString()
  const ID = rowIdx.toString() + colIdx.toString()
  return (
    <div
      id={ID}
      className={colorID}
    // onClick={() => revealCell(detail.x, detail.y)}
    >temp</div>

  )
}

