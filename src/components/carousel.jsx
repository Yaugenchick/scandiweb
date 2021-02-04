import React, { useState } from 'react'
import Controls from './controls'
import Dots from './dots'
import EmbedContent from './embedContent'
import { useData } from '../reactHooks/useData'
import { useAvailableContent } from './../reactHooks/useAvailableContent'
import { isMobileTablet } from '../reactHooks/isMobileTablet'
import { useAnimation } from '../reactHooks/useAnimation'
import { useNavigator } from '../reactHooks/useNavigator'

import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
`
const WraperApp = styled.div`
    width: calc(100% - 12px);
    overflow: hidden;
`
const WraperControls = styled.div`
    display: grid;
    grid-template-rows: 50px;
    grid-template-columns: 50% 50%;
    align-items: center;
`

const Carousel = React.memo(({
    dots = true,
    controls = true,
    animationType = "translate",
    dotTheme = "gold",
    activeDotTheme = "ccc",
    buttonTheme = "blue",
    children = [] || props.children
}) => {

    let {
        refButtonNext,
        refButtonPrew,
        activeIndex,
        setActiveIndex,
    } = useAvailableContent(controls)

    let { data } = useData({ children })
    let { networkStatusSpeed } = useNavigator()
    let { controlsForAnimation, setControlsForAnimation, dotsIndex, setDotsIndex } = useAnimation()

    let [startPoint, setStartPoint] = useState({ x: 0 })
    let [nowPoint, setNowPoint] = useState({})
    let [currentPossition, setCurrentPossition] = useState({ x: 0 })

    const controlsStartTouch = (event) => {
        setStartPoint(event.changedTouches[0].clientX)
    }
    const controlsMoveTouch = (event) => {
        let slide;
        setNowPoint(event.changedTouches[0])
        setCurrentPossition(nowPoint.clientX - startPoint)
        if (Math.abs(currentPossition) > 100) {
            if (currentPossition < 0) {
                slide = activeIndex === data.length - 1 ? activeIndex = 0 : ++activeIndex;
                setActiveIndex(slide)
                networkStatusSpeed ? setControlsForAnimation({ next: true, prew: false, dots: false }) : null
            }
            if (currentPossition > 0) {
                slide = activeIndex === 0 ? activeIndex = data.length - 1 : --activeIndex;
                setActiveIndex(slide)
                networkStatusSpeed ? setControlsForAnimation({ next: false, prew: true, dots: false }) : null
            }
            setStartPoint(nowPoint.clientX)
        }
    }

    const controlsSliderWithButton = (event) => {

        let slide,
            next = event.target.className.startsWith("controls__ButtonNext"),
            prew = event.target.className.startsWith("controls__ButtonPrew");
        
        if (next) {
            slide = activeIndex === data.length - 1 ? activeIndex = 0 : ++activeIndex;
            setActiveIndex(slide)
            networkStatusSpeed ? setControlsForAnimation({ next: true, prew: false, dots: false }) : null
        } else if (prew) {
            slide = activeIndex === 0 ? activeIndex = data.length - 1 : --activeIndex;
            setActiveIndex(slide)
            networkStatusSpeed ? setControlsForAnimation({ next: false, prew: true, dots: false }) : null
        }
    }

    const controlsSliderWithDots = (event, index) => {
        let slide,
            dots = event.target.className.startsWith("dots__Dot");

        if (dots) {
            slide = index
            setActiveIndex(slide)
            networkStatusSpeed ? setControlsForAnimation({ next: false, prew: false, dots: true }) : null
            networkStatusSpeed ? setDotsIndex(prew => ({
                currentIndex: index,
                prewIndex: prew.currentIndex
            })) : null
        }
    }

    return (
        <>
            <GlobalStyle />
            <WraperApp>
                <EmbedContent
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
                            buttonTheme={buttonTheme}
                            dots={dots}
                        />
                    )}
                </WraperControls>
            </WraperApp>
        </>
    )
})
export default Carousel
