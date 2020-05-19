"use strict";

export class MyArray{
    constructor(start=5 , stop =15){
        this.start = start;
        this.stop = stop;
    }
    [Symbol.iterator](){
        let count = this.start;
        const last = this.stop;
        return{
            next(){ return count <= last ?
                {
                    value: count++,
                    done: false
                } :
                {
                    done: true
                }

            }
        }

    }
    get getArr(){
        let arr=[];
        for(let i of this){
            arr.push(i);
        }
        return arr;
    }

}