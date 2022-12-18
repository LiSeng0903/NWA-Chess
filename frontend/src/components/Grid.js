import styled from 'styled-components'

const GridWrapper = styled.div`
    height: 100px;
    width: 100px;
    background-color: ${( { x, y, ava } ) => {
        if ( ava ) {
            return ( ( x + y ) % 2 == 0 ? '#437b21' : '#ee1b1b' )
        }
        else {
            return ( ( x + y ) % 2 == 0 ? '#294b14' : '#8a0e0e' )
        }
    }
    };
    display: flex;
    justify-content: center; 
    align-items: center;
`

const GridImgWrapper = styled.img`
    height: 70%;
`

const Grid = ( { x, y, image, ava, clickHandler } ) => {
    return (
        <GridWrapper x={x} y={y} ava={ava} onClick={clickHandler} >
            {image && <GridImgWrapper src={image} alt="no img" />}
        </GridWrapper >
    )
}

export { Grid }