//задача 01:
// a = 5;
// b = 1;
// c = 5;
// d = 0;


//задача 02:
// e = 5;
// f = 4;
// x = 6;
// y = 5;

//задача 03:
// let footballChampionYear = prompt('От какого года необходима информация о чемпионе Англии по футболу?', 2015);
// if (footballChampionYear < 2011) {
//     alert("Статистика еще не велась.");
// } else if (footballChampionYear == 2022) {
//     alert("Сезон еще идет.");
// } else if (footballChampionYear > 2022) {
//     alert("Все лучшее впереди!");
// } else if (footballChampionYear == 2015 ||
//     footballChampionYear == 2017) {
//     alert("Чемпион - Челси.");
// } else if (footballChampionYear == 2012 ||
//     footballChampionYear == 2014 ||
//     footballChampionYear == 2018 ||
//     footballChampionYear == 2019 ||
//     footballChampionYear == 2021) {
//     alert("Чемпион - Манчестер Сити.");
// } else if (footballChampionYear == 2011 ||
//     footballChampionYear == 2013) {
//     alert("Чемпион - Манчестер Юнайтед.");
// } else if (footballChampionYear == 2020) {
//     alert("Чемпион - Ливерпуль.");
// } else if (footballChampionYear == 2016) {
//     alert("Чемпион - Лестер Сити.");
// } else;

//версия 2 задачи 3:
// let footballChampionYear2 = prompt('От какого года необходима информация о чемпионе Англии по футболу?', 2022);
// let answerfootballChampionYear2 = (footballChampionYear2 < 2011) ? "Статистика еще не велась" :
//     (footballChampionYear2 == 2022) ? "Сезон еще идет." :
//         // (footballChampionYear2 > 2022) ? "Все лучшее впереди!" :
//         (footballChampionYear2 == 2015 || footballChampionYear2 == 2017) ? "Чемпион - Челси." :
//             (footballChampionYear2 == 2012 ||
//                 footballChampionYear2 == 2014 ||
//                 footballChampionYear2 == 2018 ||
//                 footballChampionYear2 == 2019 ||
//                 footballChampionYear2 == 2021) ? "Чемпион - Манчестер Сити." :
//                 (footballChampionYear2 == 2011 ||
//                     footballChampionYear2 == 2013) ? "Чемпион - Манчестер Юнайтед." :
//                     (footballChampionYear2 == 2020) ? "Чемпион - Ливерпуль." :
//                         (footballChampionYear2 == 2016) ? "Чемпион - Лестер Сити." :
//                             "Все лучшее впереди!";
// alert(answerfootballChampionYear2);


// версия 3 задачи 3:
// let footballChampionYear3 = prompt('От какого года необходима информация о чемпионе Англии по футболу?', 2022);

// switch (true) {
//     case +footballChampionYear3 === 2022:
//         alert("Сезон еще идет.");
//         break;

//     case +footballChampionYear3 === 2015:
//     case +footballChampionYear3 === 2017:
//         alert("Чемпион - Челси.");
//         break;

//     case +footballChampionYear3 === 2012:
//     case +footballChampionYear3 === 2014:
//     case +footballChampionYear3 === 2018:
//     case +footballChampionYear3 === 2019:
//     case +footballChampionYear3 === 2021:
//         alert("Чемпион - Манчестер Сити.");
//         break;

//     case +footballChampionYear3 === 2011:
//     case +footballChampionYear3 === 2013:
//         alert("Чемпион - Манчестер Юнайтед.");
//         break;

//     case +footballChampionYear3 === 2020:
//         alert("Чемпион - Ливерпуль.");
//         break;

//     case +footballChampionYear3 === 2016:
//         alert("Чемпион - Лестер Сити.");
//         break;

//     case +footballChampionYear3 < 2011:
//         alert("Статистика еще не велась.");
//         break;

//     case +footballChampionYear3 > 2022:
//         alert("Все лучшее впереди!");
//         break;
// }

// задача 4:
// let loginUser = prompt('Введите Ваш логин');
// if (loginUser === "Админ") {
//     passwordUserIdentified ()
// } else if (loginUser == undefined) {
//     alert ("Отменено")
// } else {
//     alert ("Я вас не знаю")
// };

// function passwordUserIdentified () {
//    let passwordUser = prompt ('Введите пароль')
//     if (passwordUser === "Я главный") {
//         alert ('Здравствуйте!')
//     } else if (passwordUser == undefined) {
//         alert ("Отменено")
//     } else {
//         alert ("Неверный пароль")
//     };
// }

// задача 5:
for (let showNumber = 7; showNumber < 15; showNumber++) {
    if (showNumber % 2 == 0) continue;
    if (showNumber === 13) break;
    alert(showNumber);
};
alert ("12. Цикл прерван");

//задача 6:
// let j = 0;
// while (j < 5) {
//   console.log(`number ${j}!`);
//   j++;
// }

// задача 7:
// let a = prompt ("Число первое?");
// let b = prompt ("Число второе?");
// function max(a, b) { return (a > b) ?  a : b;}
// console.log(max(a, b));

// задача 8:
// let x = prompt("Какое число?");
// let n = prompt("Какая степень данного числа? ");
// function pow(x, n) {
//     let yourResult = x;
//     for (let i = 1; i < n; i++) {
//         yourResult *= x;
//     }
//     return yourResult;
// }
// if (n > 0) {
//     console.log(pow(x, n));;
// } else {
//     console.log('Выбирете натуральное значение степени');
// }
