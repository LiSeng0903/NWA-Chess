import styled from "styled-components"

import { Grid } from "../components/Grid"

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

const Board = ( { board } ) => {
    return (
        <BoardWrapper>
            {
                board.map( ( row, x ) => {
                    return (
                        <BoardRowWrapper>
                            {row.map( ( grd, y ) => {
                                return (
                                    <Grid x={x} y={y} piece={grd} />
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