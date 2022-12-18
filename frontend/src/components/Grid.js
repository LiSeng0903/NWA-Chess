import styled from 'styled-components'

const GridWrapper = styled.div`
    height: 100px;
    width: 100px;
    background-color: ${( { x, y } ) => { return ( ( x + y ) % 2 == 0 ? '#ffffff' : '#000000' ) }};
`

const Grid = ( { x, y, piece } ) => {
    return (
        <GridWrapper x={x} y={y}>
        </GridWrapper>
    )
}

export { Grid }