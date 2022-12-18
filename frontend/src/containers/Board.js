import { useState } from "react"
import styled from "styled-components"

import { Grid } from "../components/Grid"

// import images 
import blackBishopImg from '../imgs/blackBishop.png'
import blackKingImg from '../imgs/blackKing.png'
import blackKnightImg from '../imgs/blackKnight.png'
import blackPawnImg from '../imgs/blackPawn.png'
import blackQueenImg from '../imgs/blackQueen.png'
import blackRookImg from '../imgs/blackRook.png'
import whiteBishopImg from '../imgs/whiteBishop.png'
import whiteKingImg from '../imgs/whiteKing.png'
import whiteKnightImg from '../imgs/whiteKnight.png'
import whitePawnImg from '../imgs/whitePawn.png'
import whiteQueenImg from '../imgs/whiteQueen.png'
import whiteRookImg from '../imgs/whiteRook.png'

const imgDict = {
    'pawn': {
        'w': whitePawnImg,
        'b': blackPawnImg
    },
    'bishop': {
        'w': whiteBishopImg,
        'b': blackBishopImg
    },
    'rook': {
        'w': whiteRookImg,
        'b': blackRookImg
    },
    'knight': {
        'w': whiteKnightImg,
        'b': blackKnightImg
    },
    'king': {
        'w': whiteKingImg,
        'b': blackKingImg
    },
    'queen': {
        'w': whiteQueenImg,
        'b': blackQueenImg
    },
    'nothing': {
        'nothing': undefined
    }
}

const BoardWrapper = styled.div`
    height: 800px;
    width: 800px;
    background-color: #c4afac;
    display: flex;
    flex-direction: column;
    
`

const BoardRowWrapper = styled.div`
    height: 16%;
    width: 100%;
    background-color: #dfc8c5;
    display: flex;
    flex-direction: row;
`

let test_board = []
const init_test = () => {
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
}
init_test()


const Board = () => {
    const [board, setBoard] = useState( test_board )
    const [focusP, setFocusP] = useState( [] )

    const clickHandler = ( x, y ) => {
        console.log( 'hi' )
        // preview 
        if ( board[x][y].type != 'nothing' ) {
            preview( [x, y] )
            console.log( 'preview' )
        }

        // move 
        if ( board[x][y].type == 'nothing' ) {
            move( focusP, [x, y] )
            console.log( 'move' )
        }
    }

    const preview = ( previewPos ) => {
        setFocusP( previewPos )
        // get preview board 
    }

    const move = ( from, to ) => {
        // get moved board 
    }

    return (
        <BoardWrapper>
            {
                board.map( ( row, x ) => {
                    return (
                        <BoardRowWrapper>
                            {row.map( ( grd, y ) => {
                                return (
                                    <Grid x={x} y={y} image={imgDict[grd.type][grd.color]} ava={grd.ava} clickHandler={( event ) => { clickHandler( x, y ) }} />
                                )
                            } )}
                        </BoardRowWrapper>
                    )
                } )
            }
        </BoardWrapper>
    )
}

export { Board }