"use strict";

let num = 50;

// while ( num < 55){
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while ( num<55);

// for ( let i = 1; i < 0; i++) {
//     console.log(num);
//     num++;

// }

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }
    console.log(i); // continue не перерывает цикл, но пропускает действие, если условие выполняется
}