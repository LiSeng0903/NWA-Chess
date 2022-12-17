import { DEBUG_MODE } from "./constants.js"

class Game {
    constructor() {
        this.board = []
        this.init_board()
    }

    init_board() {
        for ( let i = 0; i < 8; i++ ) {
            this.board.push( [] )
            for ( let j = 0; j < 8; j++ ) {
                this.board[i].push( {
                    type: 'nothing',
                    color: ( i == 0 || i == 1 ) ? 'b' : ( ( i == 6 || i == 7 ) ? 'w' : '' ),
                    ava: false
                }
                )
            }
        }

        this.board[0][0].type = 'rook'
        this.board[0][1].type = 'knight'
        this.board[0][2].type = 'bishop'
        this.board[0][3].type = 'queen'
        this.board[0][4].type = 'king'
        this.board[0][5].type = 'bishop'
        this.board[0][6].type = 'knight'
        this.board[0][7].type = 'rook'
        for ( let y = 0; y < 8; y++ ) {
            this.board[1][y].type = 'pawn'
        }

        this.board[7][0].type = 'rook'
        this.board[7][1].type = 'knight'
        this.board[7][2].type = 'bishop'
        this.board[7][3].type = 'queen'
        this.board[7][4].type = 'king'
        this.board[7][5].type = 'bishop'
        this.board[7][6].type = 'knight'
        this.board[7][7].type = 'rook'
        for ( let y = 0; y < 8; y++ ) {
            this.board[6][y].type = 'pawn'
        }

        if ( DEBUG_MODE ) {
            this.board[4][4].type = 'king'
            this.board[4][4].color = 'b'
        }
    }

    draw_board() {
        for ( let i = 0; i < 19; i++ ) {
            process.stdout.write( '-' )
        }
        process.stdout.write( '\n' )

        let board = this.board
        for ( let x = 0; x < 8; x++ ) {
            process.stdout.write( '| ' )
            for ( let y = 0; y < 8; y++ ) {
                process.stdout.write( String( board[x][y].ava )[0] + ' ' )
            }
            process.stdout.write( '|' )
            process.stdout.write( '\n' )
        }

        for ( let i = 0; i < 19; i++ ) {
            process.stdout.write( '-' )
        }
    }

    move( from, to ) {
        this.clean_ava()
    }

    preview_ava( previewPos ) {
        this.clean_ava()

        let [x, y] = previewPos
        let pieceType = this.board[x][y].type

        let avaList = []
        if ( pieceType == 'king' ) {
            avaList = this.king_preview( x, y )
        }
        for ( let i = 0; i < avaList.length; i++ ) {
            let [x, y] = avaList[i]
            this.board[x][y].ava = true
        }
    }

    is_in_range( examPos ) {
        let [x, y] = examPos
        return ( x >= 0 && x <= 7 && y >= 0 && y <= 7 )
    }

    king_preview( oriX, oriY ) {
        let clr = this.board[oriX][oriY].color
        let avaList = []
        for ( let x = oriX - 1; x <= oriX + 1; x++ ) {
            for ( let y = oriY - 1; y <= oriY + 1; y++ ) {
                if ( this.is_in_range( [x, y] ) && this.board[x][y].color != clr ) {
                    avaList.push( [x, y] )
                }
            }
        }
        return avaList
    }

    clean_ava() {
        for ( let x = 0; x < 8; x++ ) {
            for ( let y = 0; y < 8; y++ ) {
                this.board[x][y].ava = false
            }
        }
    }
}

export { Game }