
import React from 'react';
import styled from 'styled-components'
import { ButtonIcoPrew } from './injectsButtonsIco';
import { ButtonIcoNext } from './injectsButtonsIco';

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
	margin: 0 10px 0 0;
`
const ButtonNext = styled.div`
	color: ${props => props.buttonTheme};
	font-size: 30px;
	cursor: pointer;
	display: inline-block;
	margin: 0 0 0 10px;
`

const Controls = React.memo(({ controlsSlider, refButtonPrew, refButtonNext, buttonTheme, buttonIco }) => {
	const handleClick = (event) => {
		controlsSlider(event)
	}
	const {next, prew} = buttonIco
	const checkNext = /\.(jpg|jpeg|png|gif|svg|webp|heic|heif)$/.test(next)
	const checkPrew = /\.(jpg|jpeg|png|gif|svg|webp|heic|heif)$/.test(prew)
	
	return (
		<WraperControlsButton>
			<ButtonPrew
				onClick={handleClick}
				ref={refButtonPrew}
				buttonTheme={buttonTheme}
				dataset="prewExe"
			>	
			{checkPrew &&
			<ButtonIcoPrew
				controlsSlider={controlsSlider}
				buttonIco={buttonIco}
			/> 
			}
			{!checkPrew && prew}
			</ButtonPrew>
			<ButtonNext
				onClick={handleClick}
				ref={refButtonNext}
				buttonTheme={buttonTheme}
				dataset="nextExe"
			>
			{checkNext &&
			<ButtonIcoNext
				controlsSlider={controlsSlider}
				buttonIco={buttonIco}
			/> 
			}
			{!checkNext && next}
			</ButtonNext>
		</WraperControlsButton>
	);
})
export default Controls;
