import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

const WraperDots = styled.div`
    max-width: 200px;
    height: 20px;
    grid-row: 1/2;
    grid-column: ${({ controls }) => controls ? "1/2" : "1/3"};
    display: flex;
    align-items: center;
`
const Dot = styled.div`
    display: inline-block;
    width: ${({ index, active, length }) => {
		if (index >= 1 && index < length - 1 || active) {
			return "6px"
		} else {
			return "3px"
		}
	}};
    height:${({ index, active, length }) => {
		if (index >= 1 && index < length - 1 || active) {
			return "6px"
		} else {
			return "3px"
		}
	}};
    border-radius: 50%;
    background: ${({ active, activeDotTheme, dotTheme }) => active ? activeDotTheme : dotTheme};
    transform: ${({ active }) => active ? "scale(1.2)" : "scale(1)"};
    transition:  .5s transform ;
    margin: 0 2px;
    cursor: pointer;
`

const Dots = React.memo(({ controlsSlider, data, activeIndex, dotTheme, activeDotTheme, controls }) => {

	const handleClick = (event, index) => {
		controlsSlider(event, index)
	}

	const dots = data.map((_, index) =>
	(<Dot
		length={data.length}
		index={index}
		activeIndex={activeIndex}
		active={activeIndex === index}
		dotTheme={dotTheme}
		activeDotTheme={activeDotTheme}
		key={uuidv4()}
		onClick={(event) => handleClick(event, index)} />))
	return (

		<WraperDots
			controls={controls}
		>
			{dots}
		</WraperDots>
	)
})
export default Dots

