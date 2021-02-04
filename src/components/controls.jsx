
import React from 'react';
import styled from 'styled-components';

const WraperControlsButton = styled.div`
	grid-row: 1/2;
	grid-column: ${props => props.dots ? "2/3" : "1/3"};
	justify-self: center;
`
const ButtonPrew = styled.div`
	color: ${props => props.buttonTheme};
	font-size: 30px;
	cursor: pointer;
	display: inline-block;
	margin: 0 10px 0 0;
`
const ButtonNext = styled.div`
	color: ${props => props.buttonTheme};
	font-size: 30px;
	cursor: pointer;
	display: inline-block;
	margin: 0 0 0 10px;
`

const Controls = React.memo(({ controlsSlider, refButtonPrew, refButtonNext, buttonTheme, dots }) => {
	
	const handleClick = (event) => {
		controlsSlider(event)
	}
	const prew = "\u21E6"
	const next = "\u21E8"

	return (
		<WraperControlsButton
		dots={dots}
		>
			<ButtonPrew
				onClick={handleClick}
				ref={refButtonPrew}
				buttonTheme={buttonTheme}
				dataset="prewExe"
			>	
			{prew}
			</ButtonPrew>
			<ButtonNext
				onClick={handleClick}
				ref={refButtonNext}
				buttonTheme={buttonTheme}
				dataset="nextExe"
			>
			{next}
			</ButtonNext>
		</WraperControlsButton>
	);
})
export default Controls;
