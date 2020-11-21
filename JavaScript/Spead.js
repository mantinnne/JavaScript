"use strict";

// let a = 5;
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;  // передается значение по ссылке на обьект существующий

// copy.a = 10;

// console.log(copy);
// console.log(obj);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function copy (mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const number = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};                                         
//поверхностный метод создания копии объекта, изменяются данные только внутри главного объекта, объект внутри объекта NO

const newNumbers = copy(number);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(number);

/////////////////////////////////////////////////////////


const add = {
    d: 17,
    e: 20

};

console.log(Object.assign(number, add)); // помещает обьект ADD в обьект number! 

const clon = (Object.assign({}, add));  // создает пустой объект и помещает в него другой объект

clon.d = 20;

// console.log(add);
// console.log(clon);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // создает копию массива, которая не связана с прошлым массивом

newArray[1] = 'asdasdasdasdasd'

console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube', '123'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}     

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};