import React, { useState, useEffect } from 'react';

export function useNavigator () {

	let effective = window.navigator.connection.effectiveType,
		networkStatusSpeed;
		
	const [effectiveType, setEffectiveType] = useState()

	useEffect(() => {
		setEffectiveType(effective)
	},[])
	
	if(effectiveType ===  "4g") {
		networkStatusSpeed = true
	} else if (effectiveType === "3g") {
		networkStatusSpeed = false
	} else if (effectiveType === "2g") {
		networkStatusSpeed = false
	}
	
	return { networkStatusSpeed }
}
