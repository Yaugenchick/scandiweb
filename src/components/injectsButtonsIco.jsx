import React from 'react';

export const ButtonIcoPrew = ({controlsSlider, buttonIco}) => {
	const {prew, size} = buttonIco
	const handleClick = (event) => {
		controlsSlider(event)
	}
	return (
		<img 
		src={prew}
		width={size}
		height={size}
		onClick={handleClick}
		dataset="prew"
		/>
	)
}

export const ButtonIcoNext = ({controlsSlider, buttonIco}) => {
	const {next, size} = buttonIco
	const handleClick = (event) => {
		controlsSlider(event)
	}
	return (
		<img
		src={next}
		width={size}
		height={size}
		onClick={handleClick}
		dataset="next"
		/>
	)
}

