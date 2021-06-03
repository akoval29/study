"use strict";
// // let number = 1;
// // console.log(number);
// // number = 10,
// // console.log(number);

// // {
// //     var rez=5000;
// // }
// // console.log(rez);

// // console.log(4/0);

// // const result = confirm('are you here?');
// // console.log(result);

// // const answers = [];
// // answers[0]=prompt("как ваше имя", '');
// // answers[1]=prompt("your age?", '');
// // answers[2]=prompt("your surname?", '');
// // document.write(answers);
// // let incr=10,
// //     decr=10;
// // incr++
// // decr--
// // console.log(incr, decr);
    
// // const is = false,
// //       as = false,
// //       zz = false;

// // console.log(is || as || zz);




// // //  ПРАКТИКА 1

// // let number0fFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
// // let personalMovieDB = {
// //     count: number0fFilms,
// //     movies: {},
// //     actors: {},
// //     genres: [],
// //     privat: false
// // };
// // let a = prompt("Один из последних просмотренных фильмов?", "");
// // let b = prompt("На сколько оцените его (1-5)", "");
// // let c = prompt("Один из последних просмотренных фильмов?", "");
// // let d = prompt("На сколько оцените его (1-5)", "");

// // personalMovieDB.movies[a] = b;
// // personalMovieDB.movies[c] = d;

// // console.log(personalMovieDB);


// //  ПРАКТИКА 2

// const number0fFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// const personalMovieDB = {
//     count: number0fFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i=0; i<2; i++) {
//     let a = prompt("Один из последних просмотренных фильмов?", "");
//     let b = prompt("На сколько оцените его (1-5)", "");
//     personalMovieDB.movies[a] = b; 
// } 
// console.log(personalMovieDB);

// ///////////////////


// let num = 20;

// function aaa(text) {
//     console.log(text);
//     num = 10;
// }
// aaa("hello");
// console.log(num);

// // const calcv1 = (a,b) => {return a+b};


//  const qqq='Hello World';

// // console.log(qqq.length);
// // console.log(qqq.toUpperCase());
// // console.log(qqq.indexOf('e'));

// // const rrrr='12.5hello world';
// // // console.log(rrrr.slice(-6));
// // console.log(parseFloat(rrrr));

// console.log(qqq[0]);
// console.log(qqq.slice(-3));
// console.log(qqq.substr(6, 5));

// const test = '12.5test';
// console.log(parseInt(test));





//  ПРАКТИКА 3

let number0fFilms;

function start() {
       while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
       number0fFilms= +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
    for (let i=0; i<2; i++) {
        let a = prompt("Один из последних просмотренных фильмов?", "");
        let b = prompt("На сколько оцените его (1-5)", "");
        if (a != null && b !=null && a !="" && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');            
        } else { 
            console.log('error');
            i++;
        }
    } 
  }
rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log ("Просмотрено мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log ("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log ("Произошла ошибка");
    }
}
detectPersonalLevel ();

function showMyDB () {
    if (personalMovieDB.privat == false) {
       console.log(personalMovieDB);
    }
}
showMyDB ();

function writeYourGenres () {
    for (let i=1; i<=3; i++) {
            personalMovieDB.genres[i-1] = prompt(`Ваш любимій жанр под номером ${i}`);
    } 
}

writeYourGenres();


///////////////////