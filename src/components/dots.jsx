import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'

const WraperDots = styled.div`
    max-width: 100px;
    height: 20px;
    overflow: hidden;
    grid-row: 1/2;
    grid-column: ${props => props.controls ? "1/2" : "1/3"};
    justify-self: center;
`
const Dot = styled.div`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props => props.active ? props.activeDotTheme : props.dotTheme};
    transform: ${props => props.active ? "scale(1.4)" : "scale(1)"};
    margin: 0 2px;
    cursor: pointer;
`

const Dots = React.memo(({ controlsSlider, data, activeIndex, dotTheme, activeDotTheme, controls}) => {

    const handleClick = (event, index) => {
        controlsSlider(event, index)
    }
    // add visible active pagination
    const dots = data.map((_ , index) => 
    (<Dot 
        active={activeIndex === index}
        dotTheme={dotTheme}
        activeDotTheme={activeDotTheme} 
        key={uuidv4()} 
        onClick={(event) => handleClick(event, index)}/>))
    return (
        <WraperDots
        controls={controls}
        >
            {dots}
        </WraperDots>
    )
})
export default Dots
