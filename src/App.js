import React from 'react';
import { useState } from 'react';
import board from './Board' 
import Logic from './Logic'
import './Game.css'


function App() {
    
    const [level , setLevel] = useState(0);
    const [step , setStep] = useState(0);
    const [puzzle , setPuzzle] = useState(new board(level));
    const logic = new Logic();

    // User Mode 
    if(level > 0){
        logic.userMode(puzzle , level , setPuzzle , setLevel , step , setStep);
    }
    
    function selectGameLevel(level){
        setLevel(level);
        setPuzzle(new board(level));
    }
    
    // For Mobile Version Move
    function move (dir){
        setStep(step + 1);
        const index = puzzle.checkMove(puzzle.deepCopy(puzzle.curboard),dir);
        const cur = puzzle.deepCopy(puzzle.Move(puzzle.deepCopy(puzzle.curboard),index,dir));
        const temp = new board(level);
        temp.curboard = puzzle.deepCopy(cur);
        setPuzzle(temp);
    }

    return (
        <div className="App">
        { 
            level === 0  &&  
            <div className="start-up">
                <h1 className = "title">Soko<br></br>Number</h1>
                <h3>Select The Level</h3>
                <div className="container">
                    <div onClick = {() => selectGameLevel(1)}>1</div>
                    <div onClick = {() => selectGameLevel(2)}>2</div>
                    <div onClick = {() => selectGameLevel(3)}>3</div>
                    <div onClick = {() => selectGameLevel(4)}>4</div>
                    <div onClick = {() => selectGameLevel(5)}>5</div>
                    <div onClick = {() => selectGameLevel(6)}>6</div>
                </div>
            </div>
        }
        { 
            level !== 0  && 
            <div className="Game">
                <h1 className = "Title">Soko Number</h1>
                <div className="box">
                    {
                        puzzle.curboard.map((indx , i) => {
                            return (
                                <div className="row" key = {i}>
                                    {
                                        indx.map((ele , j) => { 
                                            let active = "";
                                            if(ele.status > 0  &&  (ele.status * 10 === ele.flag)){
                                                active = "active";
                                            }
                                            if(ele.status === -1){
                                                return (
                                                    <div className = "wall" key = {j}></div>
                                                )
                                            }
                                            else if(ele.status === 0){
                                                return (
                                                    <div className = "road" key = {j}></div>
                                                )
                                            }
                                            else if(ele.status < 10){
                                                return (
                                                    <div className = {`ele ${active}`} key = {j}>{ele.status}</div>
                                                )
                                            }
                                            else{
                                                return (
                                                    <div className = "target" key = {j}>{ele.status/10}</div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        }
        {
            level !== 0  &&  
            <div className="move">
                <div className="up" onClick={() => move('up')}></div>
                <div className = "mid">
                    <div className="left" onClick={() => move('left')}></div>
                    <div className="right" onClick={() => move('right')}></div>
                </div>
                <div className="down" onClick={() => move('down')}></div>
            </div>
        }
        {
            level !== 0  &&  
            <div className="algo">
                <div className="dfs" onClick={() => {
                    logic.DFS(puzzle)
                    setLevel(0)
                }}>DFS</div>
                <div className="bfs" onClick={() => {
                    logic.BFS(puzzle)
                    setLevel(0)
                }}>BFS</div>
                <div className="Uniform" onClick={() => {
                    logic.Uniform(puzzle)
                    setLevel(0)
                }}>Uniform</div>
                <div className="Astar" onClick={() => {
                    logic.Astar(puzzle)
                    setLevel(0)
                }}>A*</div>
            </div>
        }
        </div>
    );
}

export default App;