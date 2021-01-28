import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import { isMobileTablet } from './../reactHooks/isMobileTablet';
import  Image  from './imageContent';

/*
height: ${props => props.heightWindow}
width: ${props => props.widthWindow}*/
const WraperEmbedContent = styled.div`
    border: 1px solid #000;
`
const EmbedContent = ({
    data, 
    activeIndex,
    controlsStartTouch, 
    controlsMoveTouch, 
    isMobileTablet, 
    swiper,
    controlsForAnimation
    }) => {
    
    let wraperEmbedRef = useRef()
    
    useEffect(() => {
        if(!isMobileTablet() && !swiper) {
            return
        } else {
            wraperEmbedRef.current.addEventListener("onTouchStart", controlsStartTouch, false)
            wraperEmbedRef.current.addEventListener("onTouchMove", controlsMoveTouch, false)

        }
        return (() => {
            wraperEmbedRef.current.removeEventListener("onTouchStart", controlsStartTouch, false)
            wraperEmbedRef.current.removeEventListener("onTouchMove", controlsMoveTouch, false)
        })
    },[])



// разобратся с ref или сделать forwardref или попробовать new proxy +
// после можно сделать анимацию добавить хук для определения количства ядер операционной системы и оперативной памяти сделать cash сделать readme сделать оптимизацию controlsButton!!! and other elements (touch events)
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
        />
        </WraperEmbedContent>
    );
}
export default EmbedContent

/*
const mapRecursive = (children, callback) => (
    React.Children.map(
    children,
    child => (
    child.props.children
        ? [callback(child), mapRecursive(child.props.children, callback)]
        : callback(child)
    ),
    )
);*/
/*
        {data.map((item, slide) => (
                slide === activeIndex 
                ? (<div key={item.id} style={{background: `url(${item.url})`, width: "100%", height: "200px"}}></div>)
                : null
            ))}
*/
/*
	let [data, setData] = React.useState([])
	let [indexactive, setActiveIndex] = React.useState(0)
	const parse = (props) => {
		let virtualdom = []
		if(props.children.length > 0) {
			props.children.map((item) => {
				let elem = React.createElement(item.type, {key: uuidv4(), ref: item.ref, ...item.props})
				virtualdom.push(elem)
			})
		}

		return virtualdom
	}
	React.useEffect(() => {
		if(!props.content) {
			return
		} else {
			let data = parse(props)
			setData(data)
		}
	
	}, [])
	const dom = data.map((item, index) => {
		
		return index === indexactive ? item : null
		
	})
*/

/*
        let voidContent = data.map((element, index) => (
        
            index === activeIndex
            ? React.createElement(element.type, {key: uuidv4(), ref: element.ref, ...element.props})
            : null
        ))
*/