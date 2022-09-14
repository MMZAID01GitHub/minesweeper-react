import React, { useState } from 'react'
import "./styles.css"

export function Board(){

    const[squares, setSquares] = useState(boardSetup());
    
    return(
        <div className = "grid-container">
 
            {renderSquares(squares)}
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
   


const renderSquares = (arr) => {
    return arr.map(value => (
        <div><Square value = {value}/></div>
    ))
}



function boardSetup(){
    console.log("Generating board state");
    var mineIndices = [];
    var numberOfMines = 0;
    var rand;
    var boardState = Array(49).fill(0);

    while(numberOfMines < 10){
        rand = Math.floor(Math.random() * 49);
        if(!mineIndices.includes(rand)){
            mineIndices.push(rand);
            numberOfMines ++;
        }
    }
    for(var i =  0; i < mineIndices.length; i ++){
        boardState[mineIndices[i]] = "X";
        (mineIndices[i] >= 7 && !mineIndices.includes(mineIndices[i]-7)) && (boardState[mineIndices[i] - 7]++); //Increments value of square directly above a mine
        (mineIndices[i] <=41 && !mineIndices.includes(mineIndices[i]+7)) && (boardState[mineIndices[i] + 7]++); //Increments value of square directly below a mine
        (mineIndices[i] >= 1 && !mineIndices.includes(mineIndices[i]-1) && mineIndices[i] % 7 !== 0) && (boardState[mineIndices[i] - 1]++); //Increments value of square directly left of a mine
        (mineIndices[i] <=47 && !mineIndices.includes(mineIndices[i]+1) && mineIndices[i] % 7 !== 6) && (boardState[mineIndices[i] + 1]++); //Increments value of square directly right of a mine
        (mineIndices[i] >= 8 && !mineIndices.includes(mineIndices[i]-8) && mineIndices[i] % 7 !== 0) && (boardState[mineIndices[i] - 8]++); //Increments value of square diagonal up-left
        (mineIndices[i] <= 40 && !mineIndices.includes(mineIndices[i]+8) && mineIndices[i] % 7 !== 6) && (boardState[mineIndices[i] + 8]++); //Increments value of square diagonal down-right
        (mineIndices[i] >= 7 && !mineIndices.includes(mineIndices[i]-6) && mineIndices[i] % 7 !== 6) && (boardState[mineIndices[i] - 6]++); //Increments value of square diagonal up-right
        (mineIndices[i] <= 40 && !mineIndices.includes(mineIndices[i]+6) && mineIndices[i] % 7 !== 0) && (boardState[mineIndices[i] + 6]++); //Increments value of square diagonal down-left
    }

    console.log(boardState);
    return(boardState);

}