import React from 'react'
import { useState } from 'react';

import Cell from './Cell.js'

export default class Board {

    constructor(level) {
        this.curboard = [];
        this.finishboard = [];
        this.parentboard = [];
        this.selectLevel(level);
    }

    selectLevel(level){
        if(level === 1){
            this.curboard = [
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(1,0)  , new Cell(0,0)  , new Cell(0,0)  , new Cell(0,0)  , new Cell(10,10), new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
            ]
            this.finishboard = [
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(0,0)  , new Cell(0,0)  , new Cell(0,0)  , new Cell(0,0)  , new Cell(1,10), new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
            ]
            this.parentboard = [
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(0,0)  , new Cell(0,0)  , new Cell(0,0)  , new Cell(0,0)  , new Cell(0,10), new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
            ]
        }

        else if(level === 2){
            this.curboard = [
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(1,0) , new Cell(-1,0) , new Cell(2,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(0,0) , new Cell(-1,0) , new Cell(0,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(0,0) , new Cell(-1,0)  , new Cell(0,0)  , new Cell(-1,0), new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(0,0) , new Cell(-1,0) , new Cell(0,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(10,10) , new Cell(-1,0) , new Cell(20,20) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
            ]
            this.finishboard = [
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(0,0) , new Cell(-1,0) , new Cell(0,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(0,0) , new Cell(-1,0) , new Cell(0,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(0,0) , new Cell(-1,0)  , new Cell(0,0)  , new Cell(-1,0), new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(0,0) , new Cell(-1,0) , new Cell(0,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(1,10) , new Cell(-1,0) , new Cell(2,20) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
            ]
            this.parentboard = [
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(0,0)  , new Cell(0,0)  , new Cell(0,0)  , new Cell(0,0)  , new Cell(0,10), new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
            ]
        }

        else if(level === 3){
            this.curboard = [
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(1,0), new Cell(20,20) , new Cell(0,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(0,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(0,0), new Cell(10,10) , new Cell(2,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
            ]
            this.finishboard = [
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(0,0), new Cell(2,20) , new Cell(0,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(0,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(0,0), new Cell(1,10) , new Cell(0,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
            ]
            this.parentboard = [
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
            ]
        }

        else if(level === 4){
            this.curboard = [
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(1,0) , new Cell(-1,0), new Cell(2,0) , new Cell(-1,0) , new Cell(3,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(30,30) , new Cell(0,0), new Cell(20,20) , new Cell(0,0) , new Cell(10,10) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(0,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
            ]
            this.finishboard =  [
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(0,0) , new Cell(-1,0), new Cell(0,0) , new Cell(-1,0) , new Cell(0,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(3,30) , new Cell(0,0), new Cell(2,20) , new Cell(0,0) , new Cell(1,10) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(0,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
            ]
            this.parentboard = [
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
            ]
        }

        else if(level === 5){
            this.curboard = [
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(10,10) , new Cell(2,0), new Cell(-1,0) , new Cell(0,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(0,0) , new Cell(20,20), new Cell(3,0) , new Cell(40,40) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(0,0) , new Cell(0,0), new Cell(30,30) , new Cell(4,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
            ]
            this.finishboard =  [
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(0,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(1,10) , new Cell(0,0), new Cell(-1,0) , new Cell(0,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(0,0) , new Cell(2,20), new Cell(0,0) , new Cell(4,40) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(0,0) , new Cell(0,0), new Cell(3,30) , new Cell(0,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
            ]
            this.parentboard = [
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
            ]
        }

        else if(level === 6){
            this.curboard = [
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(0,0) , new Cell(0,0), new Cell(2,20) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(0,0) , new Cell(1,0), new Cell(10,10) , new Cell(5,50) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(3,0) , new Cell(-1,0), new Cell(4,30) , new Cell(40,40) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
            ]
            this.finishboard =  [
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(0,0) , new Cell(0,0), new Cell(2,20) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(0,0) , new Cell(0,0), new Cell(1,10) , new Cell(5,50) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(0,0) , new Cell(-1,0), new Cell(3,30) , new Cell(4,40) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
            ]
            this.parentboard = [
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
                [new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0), new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0) , new Cell(-1,0)],
            ]
        }
    }

    checkMove(board , dir){
        const index = [];
        for(let i = 1 ; i < 6 ; i ++ ) {
            for(let j = 1 ; j < 6 ; j ++ ) {
                if(dir === 'up'  &&  (board[i-1][j].status === 0  ||  board[i-1][j].status > 9) && (board[i][j].status > 0   &&  board[i][j].status < 10)){
                    index.push({i,j});
                }
                else if(dir === 'down'  &&  (board[i+1][j].status === 0  ||  board[i+1][j].status > 9) && (board[i][j].status > 0  &&  board[i][j].status < 10)){
                    index.push({i,j});
                }
                else if(dir === 'left'  &&  (board[i][j-1].status === 0  ||  board[i][j-1].status > 9) && (board[i][j].status > 0  &&  board[i][j].status < 10)){
                    index.push({i,j});
                }
                else if(dir === 'right'  &&  (board[i][j+1].status === 0  ||  board[i][j+1].status > 9) && (board[i][j].status > 0  &&  board[i][j].status < 10)){
                    index.push({i,j});
                }
            }
        }
        return index;
    }

    Move(board , index , dir){
        const temp = this.deepCopy(board);
        let x = 0  , y = 0;
        if(dir === 'up')           x = -1;
        else if(dir === 'down')    x = 1;
        else if(dir === 'left')    y = -1;
        else if(dir === 'right')   y = 1;
        index.map((ele) => {
            temp[ele.i + x][ele.j + y].status = temp[ele.i][ele.j].status;
            temp[ele.i][ele.j].status = 0;
        })
        for(let i = 1 ; i < 6 ; i ++ ) {
            for(let j = 1 ; j < 6 ; j ++ ) {
                if(temp[i][j].flag >= 10  &&  temp[i][j].status === 0)  temp[i][j].status = temp[i][j].flag;
            }
        }
        return temp;
    }

    getNextStates(cur){
        const list = [];
        let upIndex    = this.checkMove(cur , 'up')    , up    = this.Move(cur,upIndex,'up');
        let downIndex  = this.checkMove(cur , 'down')  , down  = this.Move(cur,downIndex,'down');
        let leftIndex  = this.checkMove(cur , 'left')  , left  = this.Move(cur,leftIndex,'left');
        let rightIndex = this.checkMove(cur , 'right') , right = this.Move(cur,rightIndex,'right');

        if(!this.Equal(left,cur))       list.push([left,'L']);
        if(!this.Equal(right,cur))      list.push([right,'R']);
        if(!this.Equal(down,cur))       list.push([down,'D']);
        if(!this.Equal(up,cur))         list.push([up,'U']);

        return list;

    }

    Equal(board , target){
        for(let i = 0 ; i < 7 ; i ++ ) {
            for(let j = 0 ; j < 7 ; j ++ ) {
                if(board[i][j].status !== target[i][j].status)   return false;
            }  
        }
        return true;
    }

    deepCopy(board){
        const temp = [];
        for(let i = 0 ; i < 7 ; i ++ ) {
            temp[i] = [];
            for(let j = 0 ; j < 7 ; j ++ ) {
                temp[i].push(new Cell(board[i][j].status , board[i][j].flag));
            }
        }
        return temp;
    }

    isFinish(board){
        for(let i = 0 ; i < 7 ; i ++ ) {
            for(let j = 0 ; j < 7 ; j ++ ) {
                if(board[i][j].status !== this.finishboard[i][j].status)   return false;
            }  
        }
        return true;
    }

    printState(state){
        console.log("0 | 1 | 2 | 3 | 4 | 5 | 6");
        console.log("- - - - - - - - - -");
        for(let i = 0 ; i < 7 ; i ++ ) {
            const row = [`${i} |`];
            for(let j = 0 ; j < 7 ; j ++ ){
                if(state[i][j].status === -1)  row.push(" * ");
                else if(state[i][j].status === 0)  row.push("   ");
                else if(state[i][j].status > 0  &&  state[i][j].status < 10)  row.push(` ${state[i][j].status} `);
                else        row.push(`${state[i][j].status} `);
            }
            console.log(row.join(""));
        }
        console.log("---------------------------------------------");

    }

    Hash(board){
        let temp = "";
        // let temp = JSON.stringify(board);
        for(let i = 0 ; i < 7 ; i ++ ) {
            for(let j = 0 ; j < 7 ; j ++ ) {
                temp += board[i][j].status.toString(10);
            }  
        }
        return temp;
    }

    heuristic(board , pos){
        let h = 0;
        for(let i = 0 ; i < 7 ; i ++ ) {
            for(let j = 0 ; j < 7 ; j ++ ) {
                if(pos.has(board[i][j].status)){
                    const ele = pos.get(board[i][j].status);
                    h += (Math.abs(i - ele[0]) + Math.abs(j - ele[1]));
                }
            }
        }
        return h;
    }

    getPos(board){
        const index = new Map();
        for(let i = 0 ; i < 7 ; i ++ ) {
            for(let j = 0 ; j < 7 ; j ++ ) {
                if(board[i][j].flag > 9){
                    index.set(board[i][j].flag / 10 , [i , j]);
                }
            }
        }
        return index;
    }
}