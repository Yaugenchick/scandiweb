import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { isMobileTablet } from './../reactHooks/isMobileTablet';
import SlideContainer from './SlideContainer';

const WraperEmbedContent = styled.div`
    position: relative;
`

const EmbedContentContainer = ({
    data,
    activeIndex,
    controlsStartTouch,
    controlsMoveTouch,
    controlsForAnimation,
    animationType,
    dotsIndex
}) => {

    let wraperEmbedRef = useRef()
    
    useEffect(() => {
        if (!isMobileTablet()) {
            return
        } else {
            wraperEmbedRef.current.addEventListener("onTouchStart", controlsStartTouch, false)
            wraperEmbedRef.current.addEventListener("onTouchMove", controlsMoveTouch, false)
        }
        return (() => {
            wraperEmbedRef.current.removeEventListener("onTouchStart", controlsStartTouch, false)
            wraperEmbedRef.current.removeEventListener("onTouchMove", controlsMoveTouch, false)
        })
    }, [isMobileTablet()])

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
}
export default EmbedContentContainer
