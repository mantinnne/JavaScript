"use strict";

if (4 == 5) {
    console.log('ok!');
} else {
    console.log("not OK!");
}

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if ( num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok');
// }

// (num == 50) ? console.log('Ok') : console.log('Error'); // тернарный  оператор, работает по аналогии с if 

const num = 48;

switch (num) {
    case 49:
        console.log('Incorrect');
        break;
    case 100:
        console.log('Incorrect');
        break;
    case 50:
        console.log('Ok');
        break;
    default:
        console.log('не в этот раз');
        break;

}