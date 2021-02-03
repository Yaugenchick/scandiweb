import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'

const WraperDots = styled.div`
    width: 100px;
    height: 20px;
    overflow: hidden;
    grid-row: 1/2;
    grid-column: 1/2;
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
`

const Dots = ({ controlsSlider, data, activeIndex, dotTheme, activeDotTheme}) => {

    const handleClick = (event, index) => {
        controlsSlider(event, index)
    }
    const dots = data.map((_ , index) => 
    (<Dot 
        active={activeIndex === index}
        dotTheme={dotTheme}
        activeDotTheme={activeDotTheme} 
        key={uuidv4()} 
        onClick={(event) => handleClick(event, index)}/>))
    return (
        <WraperDots>
            {dots}
        </WraperDots>
    )
}
export default Dots
