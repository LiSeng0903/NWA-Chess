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

class Bishop extends Piece {
    constructor( x, y, clr ) {
        super( x, y, clr )
        this.type = 'bishop'
    }
}

class Rook extends Piece {
    constructor( x, y, clr ) {
        super( x, y, clr )
        this.type = 'rook'
    }
}

class Knight extends Piece {
    constructor( x, y, clr ) {
        super( x, y, clr )
        this.type = 'knight'
    }
}

class King extends Piece {
    constructor( x, y, clr ) {
        super( x, y, clr )
        this.type = 'king'
    }
}

class Queen extends Piece {
    constructor( x, y, clr ) {
        super( x, y, clr )
        this.type = 'queen'
    }
}