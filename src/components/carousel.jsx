import React, {useState} from 'react'
import Controls from './controls'
import Dots from './dots'
import EmbedContent from './embedContent'
import { useData } from '../reactHooks/useData'
import { useAvailableContent } from './../reactHooks/useAvailableContent'
import { isMobileTablet } from '../reactHooks/isMobileTablet'
import { useAnimation } from '../reactHooks/useAnimation'
import { useNavigator } from '../reactHooks/useNavigator'

import styled from 'styled-components'


const WraperControls = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 50% 50%;
    align-items: center;
`
/*

*/
const Carousel = ({
    embed = true,
    dots = true,
    controls = true,
    animation = true,
    swiper = true,
    dotTheme = "gold",
    activeDotTheme = "ccc",
    buttonTheme = "blue",
    buttonIco = {
        prew: () => "\u21E6",
        next: () => "\u21E8"
    },
    url= '',
    children = [] || props.children 
}) => {

    let {
        refButtonNext,
        refButtonPrew,
        activeIndex,
        setActiveIndex,
    } = useAvailableContent(controls)
    
    let {data, setData} = useData({url, children})

    let {controlsForAnimation, setControlsForAnimation} = useAnimation()

    let [startPoint, setStartPoint] = useState({x:0})
    let [nowPoint, setNowPoint] = useState({})
    let [currentPossition, setCurrentPossition] = useState({x:0})
    useNavigator()
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
                
            }
            if (currentPossition > 0) {
                slide = activeIndex === 0 ? activeIndex = data.length - 1 : --activeIndex;
                setActiveIndex(slide)
            
            }
            setStartPoint(nowPoint.clientX)
        }
    }

    const controlsSliderWithButton = (event) => {
        let slide,
            next = event.target.className.startsWith("controls__ButtonNext"),
            prew = event.target.className.startsWith("controls__ButtonPrew");

        if(next) {
            slide = activeIndex === data.length - 1 ? activeIndex = 0 : ++activeIndex;
            setActiveIndex(slide)
            setControlsForAnimation({next: true, prew: false, dots: false})
        } else if (prew) {
            slide = activeIndex === 0 ? activeIndex = data.length - 1 : --activeIndex;
            setActiveIndex(slide)
            setControlsForAnimation({next: false, prew: true, dots: false})
        }
    }

    const controlsSliderWithDots = (event, index) => {
        let slide,
            dots = event.target.className.startsWith("dots__Dot");

        if(dots) {
            slide = index
            setActiveIndex(slide)
            setControlsForAnimation({next: false, prew: false, dots: true, index: index})
        }
    }

    return (
        <>
            {embed && (
                <EmbedContent
                    swiper={swiper}
                    animation={animation}
                    controlsForAnimation={controlsForAnimation}
                    data={data}
                    activeIndex={activeIndex}
                    isMobileTablet={isMobileTablet}
                    controlsStartTouch={controlsStartTouch}
                    controlsMoveTouch={controlsMoveTouch}
                />
            )}
            <WraperControls>
            {dots && (
                <Dots
                    controlsSlider={controlsSliderWithDots}
                    data={data}
                    activeIndex={activeIndex}
                    dotTheme={dotTheme}
                    activeDotTheme={activeDotTheme}
                    
                />
            )}
            {controls && (
                <Controls
                    controlsSlider={controlsSliderWithButton}
                    refButtonPrew={refButtonPrew}
                    refButtonNext={refButtonNext}
                    buttonTheme={buttonTheme}
                    buttonIco={buttonIco}
                
                />
            )}
            </WraperControls>
        </>
    )
}
export default Carousel
