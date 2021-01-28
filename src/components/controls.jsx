import React from 'react';
import styled from 'styled-components'

const WraperControlsButton = styled.div`
	grid-row: 1/2;
	grid-column: 2/3;
	justify-self: center;
`
const ButtonPrew = styled.div`
	color: ${props => props.buttonTheme};
	font-size: 30px;
	cursor: pointer;
	display: inline-block;
`
const ButtonNext = styled.div`
	color: ${props => props.buttonTheme};
	font-size: 30px;
	cursor: pointer;
	display: inline-block;
`

const Controls = ({ controlsSlider, refButtonPrew, refButtonNext, buttonTheme, buttonIco }) => {
    const handleClick = (event) => {
		controlsSlider(event)
	}
	const prew = buttonIco.prew()
	const next = buttonIco.next()
    return (
        <WraperControlsButton>
			<ButtonPrew
					onClick={handleClick}
					ref={refButtonPrew}
					buttonTheme={buttonTheme}
					>
						{prew}
            </ButtonPrew>
			<ButtonNext
					onClick={handleClick}
					ref={refButtonNext}
					buttonTheme={buttonTheme}
					>
						{next}
            </ButtonNext>
        </WraperControlsButton>
    );
}
export default Controls;
