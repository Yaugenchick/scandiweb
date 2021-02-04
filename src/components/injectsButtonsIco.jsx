import React from 'react';

export const ButtonIcoPrew = React.memo(({controlsSlider, buttonIco}) => {
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
		id="prewIco"
		/>
	)
})

export const ButtonIcoNext = React.memo(({controlsSlider, buttonIco}) => {
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
		id="nextIco"
		/>
	)
})

