import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'
//overflow: hidden
const WraperDots = styled.div`
    max-width: 130px;
    height: 45px;
    grid-row: 1/2;
    grid-column: ${props => props.controls ? "1/2" : "1/3"};
    justify-self: center;
`

const Dot = styled.div`
    display: inline-block;
    border: ${props => console.log(props)};
    width: ${({last, perLast, second, first, index, active, activeIndex, length}) => {
      if(first === index && !active && activeIndex > 3) {
        return "5px"
      } else if (second === index && activeIndex >= 5){
        return "7px"
      } else if (last === index && !active && activeIndex === length - 3) {
        return "5px"
      } else if (perLast === index && !active && activeIndex === length - 3) {
        return "7px"
      } else {
        return "10px"
      }
    }};
    height: ${({last,perLast, second, first, index, active, activeIndex, length}) => {
      if(first === index && !active && activeIndex > 3) {
        return "5px"
      } else if (second === index && activeIndex >= 5) {
        return "7px"
      } else if (last === index && activeIndex === length - 3) {
        return "5px"
      } else if (perLast === index && activeIndex === length - 3) {
        return "7px"
      } else {
        return "10px"
      }
    }};
    border-radius: 50%;
    background: ${props => props.active ? props.activeDotTheme : props.dotTheme};
    transform: ${props => props.active ? "scale(1.4)" : "scale(1)"};
    margin: 0 2px;
    cursor: pointer;
`

const Dots = React.memo(({currentDots, controlsSlider, data, activeIndex, dotTheme, activeDotTheme, controls}) => {
    
    const handleClick = (event, index) => {
        controlsSlider(event, index)
    }

    const dots = data.map((_ , index) => 
    (<Dot
        length={data.length}
        index={index}
        activeIndex={activeIndex}
        last={data.length - 1}
        perLast={data.length - 2}
        first={data.length - data.length}
        second={data.length - data.length + 1}
        active={activeIndex === index}
        dotTheme={dotTheme}
        activeDotTheme={activeDotTheme} 
        key={uuidv4()} 
        onClick={(event) => handleClick(event, index)}/>))
    return (
      
        <WraperDots
        controls={controls}
        >
            {dots}
            
        </WraperDots>
      
    )
})
export default Dots


/*

// Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
      return <li key={index}>{todo}</li>;
    });*/

// leftIndex = (currentPage - 1) * (dataPerPage - 1)
//rightIndex = currentPage * (dataPerPage - 1)
/*
if ( 
  ( 
    index === (dataPerPage - 1) * currentPage && 
    currentPage <totalPages 
  ) || ( 
    index === (dataPerPage - 1) * (currentPage - 1) && 
    index! == 0 
  ) 
) 
  return 'Эта точка маленький'
*/