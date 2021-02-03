import React, { useRef } from 'react';
import animationApi from "../animation/animationOptions"

const Image = ({ data, activeIndex, controlsForAnimation, animationType, dotsIndex }) => {
	let animationRef = useRef(null)

	let voidContent = data.map((element, index) => (
		index === activeIndex
			? React.createElement(element.type, {
				key: element.key,
				ref: animationRef,
				...element.props
			})
			: null
	))
	animationApi.setAnimation(animationType, controlsForAnimation, animationRef, dotsIndex)
	animationApi.getAnimation()

	return (
		<>
			{voidContent}
		</>
	)
}
export default Image
