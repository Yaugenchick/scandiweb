import React from 'react';
import animationApi from "../animation/animationOptions"

const Image = ({ data, activeIndex, controlsForAnimation }) => {
	let animationRef = React.useRef(null)

	let voidContent = data.map((element, index) => (
		index === activeIndex
			? React.createElement(element.type, { key: element.key,
				ref: animationRef,
				...element.props })
			: null
	))

	return (
		<>
			{voidContent}
		</>
	)
}
export default Image
/*
const StyledComponent = styled(({tag, children, ...props}) => React.createElement(tag, props, children))`
    // some css styles
`

@keyframes fadeout {
	0% {
    opacity: 1;
    transform: scale(1);
	}
	100% {
    opacity: 0;
    transform: scale(0.9);
	}
}

@keyframes fadein {
	0% {
    opacity: 0;
    transform: scale(1.1);
	}
	100% {
    opacity: 1;
    transform: scale(1);
	}
}

.toggleOut {
	animation: fadeout 500ms;
	opacity: 0;
}

.toggleIn {
	animation: fadein 500ms;
	opacity: 1;
}

.i

html {
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%));
}
*/