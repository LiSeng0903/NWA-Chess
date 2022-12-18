import { createContext, useContext, useEffect, useState } from "react"

const clientWS = new WebSocket( 'ws://localhost:4000' )
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
    const [name, setName] = useState( "" )


    clientWS.onmessage = ( byteString ) => {
        const { data } = byteString
        const [task, response] = JSON.parse( data )
        switch(task){
            case "init": {
                const {newBoard, turn, player} = response;
                console.log(response);
                setBoard( newBoard );
                setTurn( turn );
                setMyColor( player );
                break;
            }

            case "do": {
                const { newBoard, turn } = response;
                setBoard( newBoard );
                setTurn( turn );
                break;
            }
        }

        // setBoard( newBoard )
    }

    useEffect( () => {
        init()
    }, [] )

    useEffect(()=>{
        console.log(myColor);
    }, [board])

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