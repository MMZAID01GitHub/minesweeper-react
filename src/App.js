import React from "react";
import {Board} from './Game.js'
function App() {
  return (
  <>
    <h1>Minesweeper</h1>
    
    <div className="board">
      <Board/>
    </div>
    
  </>
  );
}

export default App;
