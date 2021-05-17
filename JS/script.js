"use strict";
// let number = 1;
// console.log(number);
// number = 10,
// console.log(number);

// {
//     var rez=5000;
// }
// console.log(rez);

// console.log(4/0);

// const result = confirm('are you here?');
// console.log(result);

// const answers = [];
// answers[0]=prompt("как ваше имя", '');
// answers[1]=prompt("your age?", '');
// answers[2]=prompt("your surname?", '');
// document.write(answers);
// let incr=10,
//     decr=10;
// incr++
// decr--
// console.log(incr, decr);
    
// const is = false,
//       as = false,
//       zz = false;

// console.log(is || as || zz);

let number0fFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let a = prompt("Один из последних просмотренных фильмов?", "");
let b = prompt("На сколько оцените его (1-5)", "");
let c = prompt("Один из последних просмотренных фильмов?", "");
let d = prompt("На сколько оцените его (1-5)", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);