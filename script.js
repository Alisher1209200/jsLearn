/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let number0Films;

function start() {
    number0Films = +prompt('Сколько фильмов вы уже посмотрели','');

    while (number0Films == '' || number0Films == null || isNaN(number0Films)) {
        number0Films = +prompt('Сколько фильмов вы уже посмотрели','');
    }
}

start();


const personalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for(let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?',''),
              b = prompt('На сколько оцените его?','');
    
            if(a != null && b != null && a != '' && b!= '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
              
    }
}

rememberMyFilms();



function detectPersonalLevel () {
    if (personalMovieDB.count < 10){
        console.log("Просмотрено давольно мало фильмов");
    } else if  (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классный зритель");
    } else if (personalMovieDB.count >=30){
        console.log("Вы киноман");
    }else{
        console.log("Произашла ошибка");
    }
}

detectPersonalLevel();


function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] =  prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();




// Код возьмите из предыдущего домашнего задания