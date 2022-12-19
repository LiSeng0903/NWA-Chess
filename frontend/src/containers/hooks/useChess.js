import { createContext, useContext, useEffect, useState } from "react"

const clientWS = new WebSocket( 'ws://172.20.10.5:4000' )
const sendData = async ( data ) => {
    await clientWS.send( JSON.stringify( data ) )
}

const ChessContext = createContext(
    {
        board: [], // 8*8 metrix 
        setBoard: () => {},

        turn: '', // 'w' or 'b'
        setTurn: () => {},

        myColor: '', // 'w' or 'b'
        setMyColor: () => {},

        focusP: [],
        setFocusP: () => {},

        winner: '',
        setWinner: () => {},

        name: "",
        setName: () => {},

        preview: () => {},
        move: () => {}
    }
)


const ChessProvider = ( props ) => {
    const [board, setBoard] = useState( [] )
    const [turn, setTurn] = useState( '' )
    const [myColor, setMyColor] = useState( '' )
    const [focusP, setFocusP] = useState( [] )
    const [winner, setWinner] = useState( '' )
    const [name, setName] = useState( "" )


    clientWS.onmessage = ( byteString ) => {
        const { data } = byteString
        const [task, response] = JSON.parse( data )
        switch ( task ) {
            case "init": {
                const { newBoard, turn, playerColor } = response
                setBoard( newBoard )
                setTurn( turn )
                setMyColor( playerColor )
                break
            }

            case "do": {
                const { newBoard, turn } = response
                setBoard( newBoard )
                setTurn( turn )
                break
            }
        }
    }

    useEffect( () => {
        init()
        console.log( `My color is ${myColor == 'w' ? 'white' : 'black'}` )
    }, [] )

    useEffect( () => {
        setWinner( checkWinner() )
    }, [board] )

    const checkWinner = () => {
        console.log( board )
        if ( board.length == 0 ) {
            return ''
        }
        let winner = ''
        let whiteKing = false
        let blackKing = false
        for ( let x = 0; x < 8; x++ ) {
            for ( let y = 0; y < 8; y++ ) {
                if ( board[x][y].type == 'king' ) {
                    if ( board[x][y].color == 'w' ) {
                        whiteKing = true
                    }
                    else {
                        blackKing = true
                    }
                }
            }
        }

        if ( blackKing == false ) {
            winner = 'w'
        }
        else if ( whiteKing == false ) {
            winner = 'b'
        }
        else {
            winner = ''
        }

        return winner
    }

    const preview = ( previewPos ) => {
        // get preview board 
        sendData( ["preview", previewPos] )
    }

    const move = ( from, to ) => {
        // get moved board 
        sendData( ["move", { from, to }] )
    }

    const init = () => {
        // get initial board 
        sendData( ['init'] )
    }

    return (
        <ChessContext.Provider
            value={
                {
                    board,
                    setBoard,

                    turn,
                    setTurn,

                    myColor,
                    setMyColor,

                    focusP,
                    setFocusP,

                    winner,
                    setWinner,

                    name,
                    setName,

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