import React, { useRef } from 'react';
import AnimationApi from "../animation/animationOptions"

const SlideContainer = ({ data, activeIndex, controlsForAnimation, animationType, dotsIndex }) => {
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
	AnimationApi.setAnimation(animationType, controlsForAnimation, animationRef, dotsIndex)
	AnimationApi.getAnimation()

	return (
		<>
			{voidContent}
		</>
	)
}
export default SlideContainer
