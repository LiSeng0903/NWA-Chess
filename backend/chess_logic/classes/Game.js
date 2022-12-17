import { Pawn, Bishop, Rook, Knight, King, Queen } from './Pieces.js'

class Game {
    constructor() {
        this.pieces = []

        // black
        this.pieces.push( new Rook( 0, 0, 'b' ) )
        this.pieces.push( new Knight( 0, 1, 'b' ) )
        this.pieces.push( new Bishop( 0, 2, 'b' ) )
        this.pieces.push( new Queen( 0, 3, 'b' ) )
        this.pieces.push( new King( 0, 4, 'b' ) )
        this.pieces.push( new Bishop( 0, 5, 'b' ) )
        this.pieces.push( new Knight( 0, 6, 'b' ) )
        this.pieces.push( new Rook( 0, 7, 'b' ) )
        for ( let y = 0; y < 8; y++ ) {
            this.pieces.push( new Pawn( 1, y, 'b' ) )
        }

        // white 
        this.pieces.push( new Rook( 7, 0, 'w' ) )
        this.pieces.push( new Knight( 7, 1, 'w' ) )
        this.pieces.push( new Bishop( 7, 2, 'w' ) )
        this.pieces.push( new Queen( 7, 3, 'w' ) )
        this.pieces.push( new King( 7, 4, 'w' ) )
        this.pieces.push( new Bishop( 7, 5, 'w' ) )
        this.pieces.push( new Knight( 7, 6, 'w' ) )
        this.pieces.push( new Rook( 7, 7, 'w' ) )
        for ( let y = 0; y < 8; y++ ) {
            this.pieces.push( new Pawn( 6, y, 'w' ) )
        }
    }

    get_board_API() {
        // create empty board 
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

        // fill pieces 
        for ( let piece of this.pieces ) {
            let [x, y] = piece.location
            board[x][y].type = piece.type
            board[x][y].color = piece.color
        }
        return board
    }

    draw_board() {
        let board = this.get_board_API()
    }
}

export { Game }