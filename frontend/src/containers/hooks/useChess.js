import { createContext, useContext, useEffect, useState } from "react"

const clientWS = new WebSocket( 'ws://localhost:4000' )
const sendData = async ( data ) => {
    await clientWS.send( JSON.stringify( data ) )
}

const ChessContext = createContext(
    {
        board: [],
        setBoard: () => {},

        focusP: [],
        setFocusP: () => {},

        preview: () => {},
        move: () => {}
    }
)


const ChessProvider = ( props ) => {
    const [board, setBoard] = useState( [] )
    const [focusP, setFocusP] = useState( [] )

    clientWS.onmessage = ( byteString ) => {
        const { data } = byteString
        const newBoard = JSON.parse( data )
        setBoard( newBoard )
    }

    useEffect( () => {
        init()
    }, [] )

    const preview = ( previewPos ) => {
        // get preview board 
        sendData( ["preview", previewPos] )
        setFocusP( previewPos )
    }

    const move = ( from, to ) => {
        // get moved board 
        sendData( ["move", { from, to }] )
    }

    const init = () => {
        sendData( ['init'] )
    }

    return (
        <ChessContext.Provider
            value={
                {
                    board,
                    setBoard,

                    focusP,
                    setFocusP,

                    preview,
                    move
                }
            }
            {...props}
        />
    )
}

const useChess = () => { return useContext( ChessContext ) }
export { useChess, ChessProvider }