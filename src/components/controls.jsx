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
	margin: 0 10px 0 0;
`
const ButtonNext = styled.div`
	color: ${props => props.buttonTheme};
	font-size: 30px;
	cursor: pointer;
	display: inline-block;
	margin: 0 0 0 10px;
`

const Controls = ({ controlsSlider, refButtonPrew, refButtonNext, buttonTheme, buttonIco }) => {
    const handleClick = (event) => {
		controlsSlider(event)
	}
	const next = () => {
		let buttonNext = buttonIco.next,
			size = buttonIco.size

		if(/^jpg|jpeg|png|gif|svg|webp|heic|heif/.test(buttonNext)) {
			return React.createElement("img", {src: buttonNext, width: size, height: size, onClick: handleClick})
		} else {
		
			return buttonNext
		}
	}
	const prew = () => {
		let buttonPrew = buttonIco.prew,
			size = buttonIco.size
		if(/^jpg|jpeg|png|gif|svg|webp|heic|heif/.test(buttonPrew)) {
			return <img src={buttonPrew} width={size} height={size}/>
		} else {
			return buttonPrew
		}
	}
    return (
        <WraperControlsButton>
			<ButtonPrew
					onClick={handleClick}
					ref={refButtonPrew}
					buttonTheme={buttonTheme}
					>
						{prew()}
            </ButtonPrew>
			<ButtonNext
					onClick={handleClick}
					ref={refButtonNext}
					buttonTheme={buttonTheme}
					>
						{next()}
            </ButtonNext>
        </WraperControlsButton>
    );
}
export default Controls;
