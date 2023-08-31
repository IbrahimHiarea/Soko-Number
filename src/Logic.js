import React from 'react'
import { useState } from 'react';
import Board from './Board' 
import { PriorityQueue,MinPriorityQueue,MaxPriorityQueue,ICompare,IGetCompareValue} from '@datastructures-js/priority-queue';

export default class Logic {

    userMode(board , level , setPuzzle , setLevel , step , setStep){

        if(board.isFinish(board.curboard)){
            setTimeout(() => {
                alert(`
                    WIN !!!
                    setps : ${step}
                `);
                setLevel(0);
                setStep(0);
            }, 300);
            return;
        }

        window.onkeydown = (ele) => {
            let dir = "";
            if(ele.keyCode === 38)  dir = 'up'
            else if(ele.keyCode === 40)  dir = 'down'
            else if(ele.keyCode === 37)  dir = 'left'
            else if(ele.keyCode === 39)  dir = 'right'
            setStep(step + 1);
            const index = board.checkMove(board.deepCopy(board.curboard),dir);
            const cur = board.deepCopy(board.Move(board.deepCopy(board.curboard),index,dir));
            const temp = new Board(level);
            temp.curboard = board.deepCopy(cur);
            setPuzzle(temp);

        };
    }

    DFS(board){
        var startTime = performance.now() , FinishIndex = 0 , depth = 0 , treeDepth = 0;
        const stack = [] , path = [];
        const vis = new Map();
        //    curent Borard , parentIndex , direction , depth
        stack.push([board.deepCopy(board.curboard),-1,'',0]);
        vis.set(board.Hash(board.curboard),[board.deepCopy(board.curboard),-1,'']);
        while(stack.length > 0){
            const cur = board.deepCopy(stack[stack.length-1][0]) , curDepth = stack[stack.length-1][3];
            stack.pop();
            // board.printState(cur);
            treeDepth = Math.max(treeDepth,curDepth);
            if(board.isFinish(cur)){
                FinishIndex = board.Hash(cur);
                depth = curDepth;
                break;
            }   
            const list = board.getNextStates(cur);
            list.forEach((ele) => {
                if(!vis.has(board.Hash(ele[0]))){  
                    stack.push([board.deepCopy(ele[0]),board.Hash(cur),ele[1],curDepth+1]);
                    vis.set(board.Hash(ele[0]),[board.deepCopy(ele[0]),board.Hash(cur),ele[1]]);
                }
            })
        }
        var endTime = performance.now();
        while(FinishIndex !== -1){
            path.unshift(vis.get(FinishIndex)[2]);
            FinishIndex = vis.get(FinishIndex)[1];
        }
        alert(`
        DFS took  ${(endTime - startTime).toFixed(2)} ms
        ---------------------------------------------------
        Number Of Visited States : ${vis.size}
        ---------------------------------------------------
        Solution Depth : ${depth}
        ---------------------------------------------------
        Tree Depth : ${treeDepth}
        ---------------------------------------------------
        Path : ${path.join(" ")}
        ---------------------------------------------------
        `)
    }

    BFS(board){
        var startTime = performance.now() , FinishIndex = 0 , depth = 0 , treeDepth = 0;
        const queue = [] , path = [];
        const vis = new Map();
        //    curent Borard , parentIndex , direction , depth
        queue.push([board.deepCopy(board.curboard),-1,'',0]);
        vis.set(board.Hash(board.curboard),[board.deepCopy(board.curboard),-1,'']);
        while(queue.length > 0){
            const cur = board.deepCopy(queue[0][0]) , curDepth = queue[0][3];
            queue.shift();
            treeDepth = Math.max(treeDepth,curDepth);
            // board.printState(cur);
            if(board.isFinish(cur)){
                FinishIndex = board.Hash(cur);
                depth = curDepth;
                break;
            }   
            const curlist = board.getNextStates(cur);
            const list = [];
            curlist.forEach((ele) => {
                list.unshift(ele);
            })
            list.forEach((ele) => {
                if(!vis.has(board.Hash(ele[0]))){  
                    queue.push([board.deepCopy(ele[0]),board.Hash(cur),ele[1],curDepth+1]);
                    vis.set(board.Hash(ele[0]),[board.deepCopy(ele[0]),board.Hash(cur),ele[1]]);
                }
            })
        }
        var endTime = performance.now();
        while(FinishIndex !== -1){
            path.unshift(vis.get(FinishIndex)[2]);
            FinishIndex = vis.get(FinishIndex)[1];
        }
        alert(`
        BFS took  ${(endTime - startTime).toFixed(2)} ms
        ---------------------------------------------------
        Number Of Visited States : ${vis.size}
        ---------------------------------------------------
        Solution Depth : ${depth}
        ---------------------------------------------------
        Tree Depth : ${treeDepth}
        ---------------------------------------------------
        Path : ${path.join(" ")}
        ---------------------------------------------------
        `)
    }

    Uniform(board){
        var startTime = performance.now() , cost = 0 , FinishIndex = board.Hash(board.deepCopy(board.finishboard)) , treeDepth = 0;
        const path = [];
        const queue = new PriorityQueue((a, b) => a[1] > b[1]);
        const vis = new Map();
        //  curent Borard , priority , parentIndex , direction
        queue.enqueue([board.deepCopy(board.curboard),0,-1,'']);
        vis.set(board.Hash(board.curboard),[board.deepCopy(board.curboard),0,-1,''])
        while(queue.size() > 0){
            const ele = queue.front();
            let Du = 1e10
            queue.pop();
            treeDepth = Math.max(treeDepth,ele[1]);
            if(vis.has(board.Hash(ele[0]))){
                Du = vis.get(board.Hash(ele[0]))[1];
            }
            if(ele[1] <= Du){
                vis.set(board.Hash(ele[0]),[board.deepCopy(ele[0]),ele[1] , ele[2] , ele[3]]);
                const list = board.getNextStates(board.deepCopy(ele[0]));
                list.forEach((val) => {
                    let Dv = 1e10;
                    if(vis.has(board.Hash(val[0]))){
                        Dv = vis.get(board.Hash(val[0]))[1];
                    }
                    if(Dv > (1 + Du)){  
                        vis.set(board.Hash(val[0]),[board.deepCopy(val[0]),(Du + 1),board.Hash(ele[0]),val[1]]);
                        queue.enqueue([board.deepCopy(val[0]),(Du + 1),board.Hash(ele[0]),val[1]]);
                    }
                })
            }
        }
        var endTime = performance.now()
        cost = vis.get(FinishIndex)[1];
        if(cost < 0)    cost *= -1;
        while(FinishIndex !== -1){
            path.unshift(vis.get(FinishIndex)[3]);
            FinishIndex = vis.get(FinishIndex)[2];
        }
        alert(`
        Uniform-cost-search took   ${(endTime - startTime).toFixed(2)} ms
        ---------------------------------------------------
        Number Of Visited States : ${vis.size}
        ---------------------------------------------------
        Solution Depth : ${cost}
        ---------------------------------------------------
        Tree Depth : ${treeDepth}
        ---------------------------------------------------
        Path : ${path.join(" ")}
        ---------------------------------------------------
        `)
    }

    Astar(board){
        var startTime = performance.now() , cost = 0 , FinishIndex = board.Hash(board.deepCopy(board.finishboard)) , treeDepth = 0;
        const queue = new PriorityQueue((a, b) => {
            if(a[4] < b[4])     return false;
            else if(b[4] < a[4])    return true;
            else{
                if(a[5] <= b[5]) return false;
                else        return true;
            }
        });
        const vis = new Map() , pos = board.getPos(board.deepCopy(board.curboard)) , path = [];
        queue.enqueue([
            board.deepCopy(board.curboard),      // curent Borard    0
            0,                                   // g(x)             1
            -1,                                  // parentIndex      2
            '',                                  // direction        3
            board.heuristic(board.curboard,pos), // f(x)             4
            board.heuristic(board.curboard,pos)  // h(x)             5
        ]);
        vis.set(board.Hash(board.curboard),[
            board.deepCopy(board.curboard),
            0,
            -1,
            '',
            board.heuristic(board.curboard,pos),
            board.heuristic(board.curboard,pos)
        ]);
        while(queue.size() > 0){
            let Du = 1e10
            const ele = queue.front();  queue.pop();
            treeDepth = Math.max(treeDepth,ele[1]);
            if(board.isFinish(board.deepCopy(ele[0])))
                break;
            
            if(vis.has(board.Hash(ele[0])))
                Du = vis.get(board.Hash(ele[0]))[1];
            
            if(ele[1] <= Du){
                vis.set(board.Hash(ele[0]),[
                    board.deepCopy(ele[0]),
                    ele[1],
                    ele[2],
                    ele[3],
                    board.heuristic(ele[0],pos) + ele[1],
                    board.heuristic(ele[0],pos)
                ]);
                const list = board.getNextStates(board.deepCopy(ele[0]));
                list.forEach((val) => {
                    let Dv = 1e10;
                    if(vis.has(board.Hash(val[0])))
                        Dv = vis.get(board.Hash(val[0]))[1];
                    
                    if(Dv > (1 + Du)){  
                        vis.set(board.Hash(val[0]),[
                            board.deepCopy(val[0]),
                            (Du + 1),
                            board.Hash(ele[0]),
                            val[1],board.heuristic(val[0],pos) + (Du + 1),
                            board.heuristic(val[0],pos)
                        ]);
                        queue.enqueue([
                            board.deepCopy(val[0]),
                            (Du + 1),
                            board.Hash(ele[0]),
                            val[1],
                            board.heuristic(val[0],pos) + (Du + 1),
                            board.heuristic(val[0],pos)
                        ]);
                    }
                })
            }
        }
        var endTime = performance.now()
        console.log(vis);
        cost = vis.get(FinishIndex)[1];
        if(cost < 0)    cost *= -1;
        while(FinishIndex !== -1){
            path.unshift(vis.get(FinishIndex)[3]);
            FinishIndex = vis.get(FinishIndex)[2];
        }
        alert(`
        A* took   ${(endTime - startTime).toFixed(2)} ms
        ---------------------------------------------------
        Number Of Visited States : ${vis.size}
        ---------------------------------------------------
        Solution Depth : ${cost}
        ---------------------------------------------------
        Tree Depth : ${treeDepth}
        ---------------------------------------------------
        Path : ${path.join(" ")}
        ---------------------------------------------------
        `)
    }

}