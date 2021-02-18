import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import Controls from './controls';
import Dots from './dots';
import EmbedContentContainer from './embedContent';
import useData from '../reactHooks/useData';
import useAvailableContent from '../reactHooks/useAvailableContent';
import useAnimation from '../reactHooks/useAnimation';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
`;
const WraperApp = styled.div`
    width: 100%;
    overflow: hidden;
`;
const WraperControls = styled.div`
    display: grid;
    grid-template-rows: 50px;
    grid-template-columns: 50% 50%;
    align-items: center;
    justify-items: center;
`;

const Carousel = React.memo(
    ({
        dots = true,
        controls = true,
        animationType = 'translate',
        dotTheme = '#ededed',
        activeDotTheme = 'rgb(140, 162, 255)',
        buttonsTheme = 'rgb(140, 162, 255)',
        children = [],
    }) => {
        let {
            refButtonNext,
            refButtonPrew,
            activeIndex,
            setActiveIndex,
        } = useAvailableContent(controls);

        const { data } = useData({ children });

        let {
            controlsForAnimation,
            setControlsForAnimation,
            dotsIndex,
            setDotsIndex,
        } = useAnimation();

        const [startPoint, setStartPoint] = useState({ x: 0 });
        const [nowPoint, setNowPoint] = useState({});
        const [currentPossition, setCurrentPossition] = useState({ x: 0 });

        const controlsStartTouch = (event) => {
            setStartPoint(event.changedTouches[0].clientX);
        };
        const controlsMoveTouch = (event) => {
            setNowPoint(event.changedTouches[0]);
            setCurrentPossition(nowPoint.clientX - startPoint);
            if (Math.abs(currentPossition) > 100) {
                if (currentPossition < 0) {
                    let slide =
                        activeIndex === data.length - 1
                            ? (activeIndex = 0)
                            : ++activeIndex;
                    setActiveIndex(slide);

                    setControlsForAnimation({
                        next: true,
                        prew: false,
                        dots: false,
                    });
                }
                if (currentPossition > 0) {
                    let slide =
                        activeIndex === 0
                            ? (activeIndex = data.length - 1)
                            : --activeIndex;
                    setActiveIndex(slide);

                    setControlsForAnimation({
                        next: false,
                        prew: true,
                        dots: false,
                    });
                }
                setStartPoint(nowPoint.clientX);
            }
        };

        const controlsSliderWithButton = (event) => {
            const next = event.target.className.startsWith(
                'controls__ButtonNext'
            );
            const prew = event.target.className.startsWith(
                'controls__ButtonPrew'
            );

            if (next) {
                let slide =
                    activeIndex === data.length - 1
                        ? (activeIndex = 0)
                        : ++activeIndex;
                setActiveIndex(slide);
                setControlsForAnimation({
                    next: true,
                    prew: false,
                    dots: false,
                });
            } else if (prew) {
                let slide =
                    activeIndex === 0
                        ? (activeIndex = data.length - 1)
                        : --activeIndex;
                setActiveIndex(slide);
                setControlsForAnimation({
                    next: false,
                    prew: true,
                    dots: false,
                });
            }
        };

        const controlsSliderWithDots = (event, index) => {
            const dotsEvent = event.target.className.startsWith('dots__Dot');

            if (dotsEvent) {
                let slide = index;
                setActiveIndex(slide);

                setControlsForAnimation({
                    next: false,
                    prew: false,
                    dots: true,
                });

                setDotsIndex((prew) => ({
                    currentIndex: index,
                    prewIndex: prew.currentIndex,
                }));
            }
        };

        return (
            <>
                <GlobalStyle />
                <WraperApp>
                    <EmbedContentContainer
                        animationType={animationType}
                        controlsForAnimation={controlsForAnimation}
                        dotsIndex={dotsIndex}
                        data={data}
                        activeIndex={activeIndex}
                        controlsStartTouch={controlsStartTouch}
                        controlsMoveTouch={controlsMoveTouch}
                    />
                    <WraperControls>
                        {dots && (
                            <Dots
                                controlsSlider={controlsSliderWithDots}
                                data={data}
                                activeIndex={activeIndex}
                                dotTheme={dotTheme}
                                activeDotTheme={activeDotTheme}
                                controls={controls}
                            />
                        )}
                        {controls && (
                            <Controls
                                controlsSlider={controlsSliderWithButton}
                                refButtonPrew={refButtonPrew}
                                refButtonNext={refButtonNext}
                                buttonsTheme={buttonsTheme}
                                dots={dots}
                            />
                        )}
                    </WraperControls>
                </WraperApp>
            </>
        );
    }
);
Carousel.defaultProps = {
    dots: true,
    controls: true,
    animationType: 'translate',
    dotTheme: '#ededed',
    activeDotTheme: 'rgb(140, 162, 255)',
    buttonsTheme: 'rgb(140, 162, 255)',
    children: [],
};
Carousel.propTypes = {
    dots: PropTypes.bool,
    controls: PropTypes.bool,
    animationType: PropTypes.string,
    dotTheme: PropTypes.string,
    activeDotTheme: PropTypes.string,
    buttonsTheme: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object),
};

export default Carousel;
