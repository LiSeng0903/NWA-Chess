import { POS } from "./constants.js"
import { Game } from "./Game.js"

let game = new Game()
const readline = require( 'readline' ).createInterface( {
    input: process.stdin,
    output: process.stdout,
} )

readline.question( `What's your name?`, name => {
    console.log( `Hi ${name}!` )
    readline.close()
} )
while ( true ) {

}


game.preview( POS )
game.draw_board()
game.draw_board( 'ava' )
