import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { v4 as uuidv4 } from 'uuid';

const WraperDots = styled.div`
    max-width: 200px;
    height: 20px;
    grid-row: 1/2;
    grid-column: ${({ controls }) => (controls ? '1/2' : '1/3')};
    display: flex;
    align-items: center;
`;
const Dot = styled.div`
    display: inline-block;
    width: ${({ index, active, length }) => {
        if ((index >= 1 && index < length - 1) || active) {
            return '6px';
        } else {
            return '3px';
        }
    }};
    height: ${({ index, active, length }) => {
        if ((index >= 1 && index < length - 1) || active) {
            return '6px';
        } else {
            return '3px';
        }
    }};
    border-radius: 50%;
    background: ${({ active, activeDotTheme, dotTheme }) =>
        active ? activeDotTheme : dotTheme};
    transform: ${({ active }) => (active ? 'scale(1.2)' : 'scale(1)')};
    transition: 0.5s transform;
    margin: 0 2px;
    cursor: pointer;
`;

const Dots = React.memo(
    ({
        controlsSlider,
        data,
        activeIndex,
        dotTheme,
        activeDotTheme,
        controls,
    }) => {
        const handleClick = (event, index) => {
            controlsSlider(event, index);
        };

        const dots = data.map((index) => (
            <Dot
                length={data.length}
                index={index}
                activeIndex={activeIndex}
                active={activeIndex === index}
                dotTheme={dotTheme}
                activeDotTheme={activeDotTheme}
                key={uuidv4()}
                onClick={(event) => handleClick(event, index)}
            />
        ));
        return <WraperDots controls={controls}>{dots}</WraperDots>;
    }
);

Dots.defaultProps = {
    data: [],
    activeIndex: 0,
    controls: true,
    dotTheme: '#ededed',
    activeDotTheme: 'rgb(140, 162, 255)',
};
Dots.propTypes = {
    controlsSlider: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
    activeIndex: PropTypes.number,
    controls: PropTypes.bool,
    dotTheme: PropTypes.string,
    activeDotTheme: PropTypes.string,
};
export default Dots;
