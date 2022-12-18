import React from 'react'
import Square from './square'

function isEven( num ) {
  return num % 2 === 0
}

function Board() {
  const board = []
  for ( let i = 0; i < 8; i++ ) {
    const squareRows = []
    for ( let j = 0; j < 8; j++ ) {
      const squareShade = ( isEven( i ) && isEven( j ) ) || ( !isEven( i ) && !isEven( j ) ) ? "white" : "black"
      squareRows.push( <Square key={i} color={squareShade} position={i} /> )
    }
    console.log( squareRows )
    board.push( <div className="board-row" key={i} style={{ display: "flex" }}>{squareRows}</div> )

  }

  return (
    <div className='boardContainer'>
      {board}
    </div>
  )
}

export default Board
