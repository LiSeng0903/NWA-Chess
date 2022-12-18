import { Game } from "./Game.js"

const sendData = ( data, ws ) => {
    ws.send( JSON.stringify( data ) )
}

const boardcastMessage = ( wss, data ) => {
    wss.clients.forEach( client => {
        sendData( data, client )
    } )
}

let player = 'w';

export default {
    game: '',
    init: ( ws ) => {
        game = new Game()
    },

    do: ( ws, wss, game ) => {
        return ( ( async ( byteString ) => {
            const { data } = byteString
            const [task, payload] = JSON.parse( data )
            switch ( task ) {
                case "init": {
                    console.log( 'init' )
                    const newBoard = game.board
                    const turn = game.turn;
                    boardcastMessage( wss, ["init", { newBoard, turn, player }] )
                    player = 'b';
                    break
                }
                case "preview": {
                    const location = payload
                    const newBoard = game.preview( [location[0], location[1]] )
                    const turn = game.turn;
                    boardcastMessage( wss, ["do", {newBoard, turn}] )
                    break
                }
                case "move": {
                    const { from, to } = payload
                    const newBoard = game.move( from, to )
                    const turn = game.turn;
                    boardcastMessage( wss, ["do", {newBoard, turn}] )
                    break
                }
            }
        } ) )
    }
}