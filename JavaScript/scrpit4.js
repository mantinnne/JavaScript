"use strict";

console.log('arr' + " - object");
console.log(4 + "5" );

let incr = 10,
    decr =10;

// ++incr;
// --decr;

console.log(++incr); // префиксная форма ( в начале, сначала изменяет, потом изменяет число) 
// постфикнася форма в начале выводит число, а потом изменяет его. incr++ пример.
console.log(--decr);

console.log(5%2); // возвращает остаток от деления

console.log(2*4 === '8');  // строгое сравнине '===' сравнивает также тип переменной и его значения..

console.log(2 + 2 * 2 === 8 );  // строгое сравнине '===' сравнивает также тип переменной и его значения..



const isChecked = true,
      isClose = true;

console.log(isChecked && isClose);       // && сравнние на "И"


console.log(isChecked || isClose);      // || сравнение на "или" 

console.log(isChecked && !isClose);       // ! отрицает в обратную сторону

