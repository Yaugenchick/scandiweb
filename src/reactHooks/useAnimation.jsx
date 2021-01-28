import React, { useState } from 'react';


export const useAnimation = () => {
	
	const [controlsForAnimation, setControlsForAnimation] = useState({next: false, prew: false, dots: false, index: null})

	return {
		controlsForAnimation,
		setControlsForAnimation
	}
}
