import React, { useState } from 'react';

export const useAnimation = () => {
	
	const [controlsForAnimation, setControlsForAnimation] = useState({next: false, prew: false, dots: false})
	const [dotsIndex, setDotsIndex] = useState({prewIndex: 0, currentIndex: 0})

	return {
		controlsForAnimation,
		setControlsForAnimation,
		dotsIndex,
		setDotsIndex
	}
}
