import { POS } from "./constants.js"
import { Game } from "./Game.js"

let game = new Game()
game.preview_ava( POS )
game.draw_board()
game.draw_board( 'ava' )
