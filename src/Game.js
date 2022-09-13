import React, { useState } from 'react'
import "./styles.css"

export function Board(){
    const[squares, setSquares] = useState(Array(49).fill(0));
    
    return(
        <div class = "grid-container">
 
            {getComponent(squares)}
            {/* <div>{renderSquare(0)}{renderSquare(0)}{renderSquare(0)}{renderSquare(0)}{renderSquare(0)}</div> */}
        
        </div>
       

    )
}

    
export function Square(props){
    const[value, setValue] = useState(props.value);
    const incrementValue = () => setValue(value + 1);
    return (
        <button
        class = "my-buttons"
        onClick={ incrementValue } 
        >{value}</button>
    )
}
   
const renderSquare = (i)=> (<Square value = {i}/>)
const getComponent = (arr) => {
    return arr.map(value => (
        <div>{renderSquare(value)}</div>
    ))
}