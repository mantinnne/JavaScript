"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмо?', ''),
        b = prompt('На сколько оцение его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');

    } else {
        console.log('Error');
        i--;
    }
}
console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно много фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман!");
} else {
    console.log("Произошла ошибка");
}


// const a1 = prompt('Один из последних просмотренных фильмо?', ''),ё
// b1 = prompt('На сколько оцение его?', '');
// while ( a1.length < 50){
//     const a1 = prompt('Один из последних просмотренных фильмо?', ''),
//           b = prompt('На сколько оцение его?', '');
// }


// console.log(personalMovieDB);