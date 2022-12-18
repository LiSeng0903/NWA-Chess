import React from 'react'
import initialiseChessBoard from '../board_init'
import { useEffect } from 'react'
import { useState } from 'react'
import Square from './square'

function isEven( num ) {
  return num % 2 === 0
}

const Board = () => {
  const [board, setBoard] = useState([]);
  useEffect( () => {
    // Calling the function
    // initialiseChessBoard()
    // freshBoard()
    createBoard()
  }, [] )

  // const freshBoard = () => {
  //     const newBoard = initialiseChessBoard();
  //     createBoard()
  //     setBoard(newBoard.squares)
  // }
  let color = []
//   const board = []

  const createBoard = () => {
    // const board = []
    for ( let i = 0; i < 8; i++ ) {
      let squareRows = []
      for ( let j = 0; j < 8; j++ ) {
        const squareShade = ( isEven( i ) && isEven( j ) ) || ( !isEven( i ) && !isEven( j ) ) ? "white" : "black"
        //   squareRows.push(<Square key={j} rowIdx={i} colIdx={j} color={squareShade} position={i} />);
        squareRows.push( squareShade )
      }
      //   console.log(squareRows)
      // board.push(<div className="board-row" key={i} style={{display: "flex"} }>{squareRows}</div>)
      color.push( squareRows )
    }
    setBoard(color)
    // console.log( board )
    // console.log( board[0] )
  }


  return (
    <div>
      {board.map( ( row, rowIdx ) => {
        return (
          <div id={'row' + rowIdx} style={{ display: "flex" }}> {
            row.map( ( col, colIdx ) => {
                console.log(board[colIdx][rowIdx])
              return(
              <Square
              rowIdx={rowIdx}
              colIdx={colIdx}
              color={board[colIdx][rowIdx]}            
              />
              )
            } )
          }
          </div>
        )
      } )}
    </div>

  )
}

export default Board

