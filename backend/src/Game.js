import { DEBUG_MODE } from "./constants.js"

class Game {
    static keys = {
        'pawn': {
            'w': '♙',
            'b': '♟'
        },
        'bishop': {
            'w': '♗',
            'b': '♝'
        },
        'rook': {
            'w': '♖',
            'b': '♜'
        },
        'knight': {
            'w': '♘',
            'b': '♞'
        },
        'queen': {
            'w': '♕',
            'b': '♛'
        },
        'king': {
            'w': '♔',
            'b': '♚'
        },
        'nothing': {
            'nothing': ' '
        }
    }

    static previewFunctions = {
        'pawn': Game.pawn_preview,
        'bishop': Game.bishop_preview,
        'rook': Game.rook_preview,
        'king': Game.king_preview,
        'queen': Game.queen_preview,
        'knight': Game.knight_preview,
        'nothing': () => { return [] }
    }

    static king_preview( oriX, oriY, board ) {
        let clr = board[oriX][oriY].color
        let avaList = []
        for ( let x = oriX - 1; x <= oriX + 1; x++ ) {
            for ( let y = oriY - 1; y <= oriY + 1; y++ ) {
                if ( Game.is_in_range( [x, y] ) && board[x][y].color != clr ) {
                    avaList.push( [x, y] )
                }
            }
        }
        return avaList
    }

    static queen_preview( oriX, oriY, board ) {

    }

    static bishop_preview( oriX, oriY, board ) {

    }

    static knight_preview( oriX, oriY, board ) {
        let clr = board[oriX][oriY].color
        let avaList = []

        avaList.push( [oriX - 1, oriY - 2] )
        avaList.push( [oriX - 2, oriY - 1] )
        avaList.push( [oriX - 2, oriY + 1] )
        avaList.push( [oriX - 1, oriY + 2] )
        avaList.push( [oriX + 1, oriY - 2] )
        avaList.push( [oriX + 2, oriY - 1] )
        avaList.push( [oriX + 2, oriY + 1] )
        avaList.push( [oriX + 1, oriY + 2] )

        avaList = avaList.filter( ( avaPos ) => { return Game.is_in_range( avaPos ) } )
        avaList = avaList.filter( ( avaPos ) => { return board[avaPos[0]][avaPos[1]].color != clr } )
        return avaList
    }

    static rook_preview( oriX, oriY, board ) {

    }

    static pawn_preview( oriX, oriY, board ) {

    }

    static is_in_range( examPos ) {
        let [x, y] = examPos
        return ( x >= 0 && x <= 7 && y >= 0 && y <= 7 )
    }

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
                    color: ( i == 0 || i == 1 ) ? 'b' : ( ( i == 6 || i == 7 ) ? 'w' : 'nothing' ),
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
            this.board[4][4].type = 'knight'
            this.board[4][4].color = 'w'
        }
    }

    draw_board( mode = 'type' ) {
        for ( let i = 0; i < 19; i++ ) {
            process.stdout.write( '-' )
        }
        process.stdout.write( '\n' )

        for ( let x = 0; x < 8; x++ ) {
            process.stdout.write( '| ' )
            for ( let y = 0; y < 8; y++ ) {
                let focusPiece = this.board[x][y]
                if ( mode == 'type' ) {
                    process.stdout.write( Game.keys[focusPiece.type][focusPiece.color] )
                }
                else if ( mode == 'ava' ) {
                    if ( focusPiece.ava == true ) {
                        process.stdout.write( 'O' )
                    }
                    else {
                        process.stdout.write( '.' )
                    }
                }
                process.stdout.write( ' ' )
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

        let avaList = Game.previewFunctions[pieceType]( x, y, this.board )
        for ( let i = 0; i < avaList.length; i++ ) {
            let [x, y] = avaList[i]
            this.board[x][y].ava = true
        }
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