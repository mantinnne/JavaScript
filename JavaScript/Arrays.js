"use strict";

const arr = [1, 2, 3, 4, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr[99] = 0;
// console.log(arr.length);

arr.forEach(function(item, i,arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);  

});

// arr.pop();  // удаляет последний элемент из массива

// console.log(arr);

// arr.push(12); // добавляет элемент в массив в конец 

// console.log(arr);

// for (let i =0; i <arr.length; i++) {
//     console.log(arr[i]);
// }

for (let value of arr) {
    console.log(value);
}

const str = prompt("", "");

const products = str.split(", "); //превращает строку в массив 
products.sort(); // сортирует строку по порядку

console.log(products.join('; ')); //превращает массив в строку. в скобках разделитель
