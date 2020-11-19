"use strict";

let num = 20;

function showFirstMessage (text) {
    console.log(text);
    let num = 10;
    console.log(num);       // локальная паременная 
}

showFirstMessage("Hello world!");
console.log(num);

// function calc (a, b) {
//     return ( a + b );
// }

// console.log(calc(2, 3));


function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

let logger = function(){
    console.log("Hello");
};

logger();

const calc = (a, b) => { return a + b };

const calc1 = (a, b) => a + b;


const calcs = ( a, b ) => {
    console.log('1');
    return a + b;
};

console.log( calcs(3, 4));
