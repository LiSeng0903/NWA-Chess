import { Pawn } from "./Pawn.js"

class Game {
    constructor() {
        this.board = this.get_empty_board()
        this.pa = new Pawn()
    }

    get_empty_board = () => {
        let board = []
        for ( let i = 0; i < 8; i++ ) {
            board.push( [] )
            for ( let j = 0; j < 8; j++ ) {
                board[i].push( {
                    type: '',
                    color: '',
                    ava: false
                } )
            }
        }
        return board
    }
}

export { Game }