import { Piece } from "./Piece.js"

class Pawn extends Piece {
    constructor( x, y, clr ) {
        super( x, y, clr )

        this.type = 'pawn'
    }
}

export { Pawn }