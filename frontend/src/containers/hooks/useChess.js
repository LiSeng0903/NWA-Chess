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
        setFocusP: () => {}
    }
)

const init_test = () => {
    let test_board = []
    for ( let i = 0; i < 8; i++ ) {
        test_board.push( [] )
        for ( let j = 0; j < 8; j++ ) {
            test_board[i].push( {
                type: 'nothing',
                color: ( i == 0 || i == 1 ) ? 'b' : ( ( i == 6 || i == 7 ) ? 'w' : 'nothing' ),
                ava: false
            }
            )
        }
    }

    test_board[0][0].type = 'rook'
    test_board[0][1].type = 'knight'
    test_board[0][2].type = 'bishop'
    test_board[0][3].type = 'queen'
    test_board[0][4].type = 'king'
    test_board[0][5].type = 'bishop'
    test_board[0][6].type = 'knight'
    test_board[0][7].type = 'rook'
    for ( let y = 0; y < 8; y++ ) {
        test_board[1][y].type = 'pawn'
    }

    test_board[7][0].type = 'rook'
    test_board[7][1].type = 'knight'
    test_board[7][2].type = 'bishop'
    test_board[7][3].type = 'queen'
    test_board[7][4].type = 'king'
    test_board[7][5].type = 'bishop'
    test_board[7][6].type = 'knight'
    test_board[7][7].type = 'rook'
    for ( let y = 0; y < 8; y++ ) {
        test_board[6][y].type = 'pawn'
    }
    return test_board
}

const ChessProvider = ( props ) => {
    const [board, setBoard] = useState( [] )
    const [focusP, setFocusP] = useState( [] )

    useEffect( () => {
        setBoard( init_test() )
    }, [] )

    return (
        <ChessContext.Provider
            value={
                {
                    board,
                    setBoard,

                    focusP,
                    setFocusP
                }
            }
            {...props}
        />
    )
}

const useChess = () => { return useContext( ChessContext ) }
export { useChess, ChessProvider }