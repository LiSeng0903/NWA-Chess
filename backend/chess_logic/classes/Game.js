class Game {
    constructor() {
        this.board = []
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
                if ( board[x][y].color == '' ) {
                    process.stdout.write( '  ' )
                }
                else {
                    process.stdout.write( board[x][y].type[0] + ' ' )
                }
            }
            process.stdout.write( '|' )
            process.stdout.write( '\n' )
        }

        for ( let i = 0; i < 19; i++ ) {
            process.stdout.write( '-' )
        }
    }

    move( from, to ) {

    }

    preview_ava( preview_pos ) {

    }
}

export { Game }