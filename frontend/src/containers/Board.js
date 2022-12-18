import { useState } from "react"
import styled from "styled-components"

import { useChess } from "./hooks/useChess"
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

const Board = () => {
    const { board, setBoard, focusP, setFocusP } = useChess()

    const clickHandler = ( x, y ) => {
        // preview 
        if ( board[x][y].type != 'nothing' ) {
            preview( [x, y] )
        }

        // move 
        if ( board[x][y].type == 'nothing' ) {
            move( focusP, [x, y] )
        }
    }

    const preview = ( previewPos ) => {
        setFocusP( previewPos )
        console.log( `preview ${previewPos}` )
        // get preview board 
    }

    const move = ( from, to ) => {
        console.log( `move from ${from} to ${to}` )
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