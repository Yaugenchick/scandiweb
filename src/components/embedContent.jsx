import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { isMobileTablet } from './../reactHooks/isMobileTablet';
import Image from './imageContent';


const WraperEmbedContent = styled.div``

const EmbedContent = ({
    data,
    activeIndex,
    controlsStartTouch,
    controlsMoveTouch,
    isMobileTablet,
    swiper,
    controlsForAnimation,
    animationType,
    dotsIndex
}) => {

    let wraperEmbedRef = useRef()

    useEffect(() => {
        if (!isMobileTablet() && !swiper) {
            return
        } else {
            wraperEmbedRef.current.addEventListener("onTouchStart", controlsStartTouch, false)
            wraperEmbedRef.current.addEventListener("onTouchMove", controlsMoveTouch, false)
        }
        return (() => {
            wraperEmbedRef.current.removeEventListener("onTouchStart", controlsStartTouch, false)
            wraperEmbedRef.current.removeEventListener("onTouchMove", controlsMoveTouch, false)
        })
    }, [isMobileTablet(), swiper])

    return (
        <WraperEmbedContent
            ref={wraperEmbedRef}
            onTouchStart={controlsStartTouch}
            onTouchMove={controlsMoveTouch}
        >   
                <Image
                    data={data}
                    activeIndex={activeIndex}
                    controlsForAnimation={controlsForAnimation}
                    animationType={animationType}
                    dotsIndex={dotsIndex}
                />
        </WraperEmbedContent>
    );
}
export default EmbedContent
