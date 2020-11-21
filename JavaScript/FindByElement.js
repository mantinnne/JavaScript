"use strict";

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');

console.log(btns);
console.log(btns[1]);


const btnsf = document.getElementsByTagName('button')[1];
console.log(btnsf);

const circles = document.getElementsByClassName('circle');

console.log(circles);


const hearts = document.querySelectorAll('.heart')



hearts.forEach(item => {
    console.log(item);
});