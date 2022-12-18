import styled from 'styled-components'

const GridWrapper = styled.div`
    height: 100px;
    width: 100px;
    background-color: ${( { x, y } ) => { return ( ( x + y ) % 2 == 0 ? '#b48585' : '#a21717' ) }};
    display: flex;
    justify-content: center; 
    align-items: center;
`

const GridImgWrapper = styled.img`
    height: 70%;
`

const Grid = ( { x, y, image, ava, clickHandler } ) => {
    return (
        <GridWrapper x={x} y={y} onClick={clickHandler}>
            {image && <GridImgWrapper src={image} alt="no img" />}
        </GridWrapper>
    )
}

export { Grid }