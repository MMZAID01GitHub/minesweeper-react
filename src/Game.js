import React, { useState } from 'react'
import "./styles.css"

export function Board(){
    var values = Array(49).fill(0);
    var mines = generateMines();
    for(var i =  0; i < mines.length; i ++){
        values[mines[i]] = "X";
    }

    const[squares, setSquares] = useState(values);
    

    
    return(
        <div className = "grid-container">
 
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
        className = "my-buttons"
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

function generateMines(){
    console.log("Generating mines");
    var mineIndices = [];
    var numberOfMines = 0;
    var rand;

    while(numberOfMines < 10){
        rand = Math.floor(Math.random() * 49);
        if(!mineIndices.includes(rand)){
            mineIndices.push(rand);
            numberOfMines ++;
        }
    }

    console.log(mineIndices);
    return(mineIndices)
}