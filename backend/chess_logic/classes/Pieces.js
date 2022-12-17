class Piece {
    constructor( x, y, clr ) {
        this.type = ''
        this.location = [x, y]
        this.color = clr
    }
}

class Pawn extends Piece {
    constructor( x, y, clr ) {
        super( x, y, clr )

        this.type = 'pawn'
    }
}
