import React, {useState, useEffect, useReducer, useCallback, memo} from 'react';

export const useNavigator = () => {
	console.log(window.navigator)
	let navigator = window.navigator.connection
	const [navigatorOptions, setNavigatorOptions] = useState(navigator)
}
