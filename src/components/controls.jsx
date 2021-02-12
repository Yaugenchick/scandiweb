
import React from 'react';
import styled from 'styled-components';

const WraperControlsButton = styled.div`
	grid-row: 1/2;
	grid-column: ${({ dots }) => dots ? "2/3" : "1/3"};
`
const ButtonPrew = styled.div`
	color: ${({ buttonsTheme }) => buttonsTheme};
	font-size: 30px;
	font-weight: bold;
	cursor: pointer;
	display: inline-block;
	margin: 0 10px 0 0;
	border: none;
`
const ButtonNext = styled.div`
	color: ${({ buttonsTheme }) => buttonsTheme};
	font-size: 30px;
	font-weight: bold;
	cursor: pointer;
	display: inline-block;
	margin: 0 0 0 10px;
	border: none;
`

const Controls = React.memo(({ controlsSlider, refButtonPrew, refButtonNext, buttonsTheme, dots }) => {
	
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
				buttonsTheme={buttonsTheme}
			>	
			{prew}
			</ButtonPrew>
			<ButtonNext
				onClick={handleClick}
				ref={refButtonNext}
				buttonsTheme={buttonsTheme}
			>
			{next}
			</ButtonNext>
		</WraperControlsButton>
	);
})
export default Controls;
