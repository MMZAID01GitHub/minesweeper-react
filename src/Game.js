import React, { useState } from 'react'
import "./styles.css"

export function Board(){
  //  const[squares, setSquares] = useState(Array(9).fill(null));
    return(
        <>
            <div>{renderSquare()}{renderSquare()}{renderSquare()}{renderSquare()}{renderSquare()}</div>
            <div>{renderSquare()}{renderSquare()}{renderSquare()}{renderSquare()}{renderSquare()}</div>
            <div>{renderSquare()}{renderSquare()}{renderSquare()}{renderSquare()}{renderSquare()}</div>
            <div>{renderSquare()}{renderSquare()}{renderSquare()}{renderSquare()}{renderSquare()}</div>
            <div>{renderSquare()}{renderSquare()}{renderSquare()}{renderSquare()}{renderSquare()}</div>
        </>

    )
}

    
export function Square(){
    const[value, setValue] = useState(0);
    const incrementValue = () => setValue(value + 1);
    return (
        <button
        style={{"height": "50px", "width":"50px"}}
        onClick={ incrementValue } 
        >{value}</button>
    )
}
   
const renderSquare = ()=> (<Square/>)
