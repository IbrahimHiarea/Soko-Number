import React from 'react'

// -1  ===> wall
//  0  ===> road
//  [1 - 9]  ===> Elements
//  [10-90]  ===> Target

export default class Cell {
    constructor(status , flag) {
        this.status = status;
        this.flag = flag;
    }
}