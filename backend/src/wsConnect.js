import { Game } from "./Game.js"

const sendData = ( data, ws ) => {
    ws.send( JSON.stringify( data ) )
}

const boardcastMessage = ( wss, data ) => {
    wss.clients.forEach( client => {
        sendData( data, client )
    } )
}


export default {
    do: ( ws, wss, game ) => {
        return ( ( async ( byteString ) => {
            const { data } = byteString
            const [task, payload] = JSON.parse( data )
            switch ( task ) {
                case "init": {
                    const newBoard = game.board
                    const turn = game.turn
                    let player2 = ''
                    if ( game.playerCnt === 2 ) {
                        player2 = 'b'
                    } else {
                        player2 = 'w'
                        game.playerCnt++
                    }
                    sendData( ["init", { newBoard, turn, player2 }], ws )
                    break
                }
                case "preview": {
                    const location = payload
                    const newBoard = game.preview( [location[0], location[1]] )
                    const turn = game.turn
                    boardcastMessage( wss, ["do", { newBoard, turn }] )
                    break
                }
                case "move": {
                    const { from, to } = payload
                    const newBoard = game.move( from, to )
                    const turn = game.turn
                    boardcastMessage( wss, ["do", { newBoard, turn }] )
                    break
                }
            }
        } ) )
    }
}