import React, { useState, useEffect, useRef } from 'react'

export function useAvailableContent({ controls }) {
	const [activeIndex, setActiveIndex] = useState(0)
	const refButtonPrew = useRef()
	const refButtonNext = useRef()
	useEffect(() => {
		if (controls === true) {
			refButtonNext.current.focus()
			refButtonPrew.current.focus()

		} else {
			null
		}
	}, [])
	return {
		activeIndex,
		setActiveIndex,
		refButtonPrew,
		refButtonNext
	}
}
