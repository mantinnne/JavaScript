"use strict";

const str = "test";

// const arr = [1,2,4];

// console.log(str[2] = "d");
// console.log(str);


console.log(str.toUpperCase()); // вовзращается новая строка, которую можно использовать в дальнейшем, старая не меняет
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf(fruit));

// находит индекс, с которого начинается значение передаемое в indexof();

const logg = "Hello world!";

// console.log(logg.slice(6, 12)); 
// обрезает строку с определенного индекса до определенного значения индекса, в итоге выводится "Hello"
// console.log(logg.slice(6)); // с определенного индекса до конца индекса 
// console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 12)); 
// разница в том, можно задавать первый аргумент больше чем второй и не поддерживается отрицательные значения.

console.log(logg.substr(6, 5)); 
// указывает начало и второй аргумент, указывает на необходимое кол-во символов для возврата.

const  num = 12.2;

console.log(Math.round(num)); // round округления чисел.

const test = "12.2px";
console.log(parseInt(test)); // превращает строку, в число, буквы обрезаются.
console.log(parseFloat(test)); // возвращается строка в десятичном значение ( с дробным значением) 
