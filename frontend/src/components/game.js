import React from 'react'

import '../index.css'
import Board from './board.js'

const Game = () => {

//   handleClick( i ) {
//     const squares = [...this.state.squares]
//     console.log( squares )
//   }
    return (
      <div>
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
        </div>
      </div>
    )
}

export default Game