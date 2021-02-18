/* eslint-disable prettier/prettier */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import AnimationApi from '../animation/animationOptions';

const SlideContainer = ({
    data,
    activeIndex,
    controlsForAnimation,
    animationType,
    dotsIndex,
}) => {
    const animationRef = useRef(null);

    const voidContent = data.map((element, index) =>
        index === activeIndex
            ? React.createElement(element.type, {
                key: element.key,
                ref: animationRef,
                ...element.props,
            })
            : null
    );
    AnimationApi.setAnimation(
        animationType,
        controlsForAnimation,
        animationRef,
        dotsIndex
    );
    AnimationApi.getAnimation();

    return <>{voidContent}</>;
};
SlideContainer.defaultProps = {
    data: [],
    activeIndex: 0,
    animationType: 'translate',
    dotsIndex: 0,
    controlsForAnimation: {},
};
SlideContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    activeIndex: PropTypes.number,
    controlsForAnimation: PropTypes.objectOf(PropTypes.bool),
    animationType: PropTypes.string,
    dotsIndex: PropTypes.number,
};
export default SlideContainer;
