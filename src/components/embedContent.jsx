import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import isMobileTablet from '../reactHooks/isMobileTablet';
import SlideContainer from './SlideContainer';

const WraperEmbedContent = styled.div`
    position: relative;
`;

const EmbedContentContainer = ({
    data,
    activeIndex,
    controlsStartTouch,
    controlsMoveTouch,
    controlsForAnimation,
    animationType,
    dotsIndex,
}) => {
    const wraperEmbedRef = useRef();

    useEffect(() => {
        if (!isMobileTablet()) {
            return;
        } else {
            wraperEmbedRef.current.addEventListener(
                'onTouchStart',
                controlsStartTouch,
                false
            );
            wraperEmbedRef.current.addEventListener(
                'onTouchMove',
                controlsMoveTouch,
                false
            );
        }
        return () => {
            // copy to variable
            wraperEmbedRef.current.removeEventListener(
                'onTouchStart',
                controlsStartTouch,
                false
            );
            wraperEmbedRef.current.removeEventListener(
                'onTouchMove',
                controlsMoveTouch,
                false
            );
        };
    }, [controlsStartTouch, controlsMoveTouch]);

    return (
        <WraperEmbedContent
            ref={wraperEmbedRef}
            onTouchStart={controlsStartTouch}
            onTouchMove={controlsMoveTouch}
        >
            <SlideContainer
                data={data}
                activeIndex={activeIndex}
                controlsForAnimation={controlsForAnimation}
                animationType={animationType}
                dotsIndex={dotsIndex}
            />
        </WraperEmbedContent>
    );
};

EmbedContentContainer.defaultProps = {
    data: [],
    activeIndex: 0,
    animationType: '',
    dotsIndex: 0,
    controlsForAnimation: {},
};
EmbedContentContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    activeIndex: PropTypes.number,
    controlsStartTouch: PropTypes.func.isRequired,
    controlsMoveTouch: PropTypes.func.isRequired,
    controlsForAnimation: PropTypes.objectOf(PropTypes.bool),
    animationType: PropTypes.string,
    dotsIndex: PropTypes.number,
};
export default EmbedContentContainer;
