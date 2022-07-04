// задача 1:
// function calcSum(firstNum, secondNum, ...otherNum) {
//     return firstNum + secondNum,
//         console.log(otherNum)
// };
// calcSum(1, 2, 3, 4, 5);

// задача 2:
// let drivers = ["Dominic", "Brian", "Letty", "Roman"];
// let antagonists = ["Deckard", "Luke"];
// concat:
// let family = drivers.concat(antagonists);
// push.apply:
// let family = [];
// Array.prototype.push.apply(family, antagonists);
// Array.prototype.push.apply(family, drivers);
// family,push.apply(family,[...antagonists,...drivers])
// spread:
// let family = [...drivers, ...antagonists];
// splice (только если массив с массивами):
// let family = [drivers.splice(0,), antagonists.splice(0,)];
// forEach:
// let family = []; 
// drivers.forEach((item) => {
//     return family.push(item)
// });
// antagonists.forEach((item) => {
//     return family.push(item)
// });


// задача 3
// let cars = ["Jeep", "Jeep", "Kia", "BMW", "BMW", "BMW", "Renault"];
// let uniqueCars = [...new Set(cars)];

// задача 4:
// function getInfoForCountry(nameCountry) {
//     return function(nameCity) {
//         return [`${nameCountry} - ${nameCity}`]
//     };
// };
// const town = getInfoForCountry();

// задача 5:
// function printNumbers(from, to) {
//     let yourInteval = from;
//     setTimeout(function show () {
//         console.log(yourInteval);
//         if (yourInteval < to) {
//             setTimeout(show, 1000);
//         }
//         yourInteval++;
//     }, 1000);
// };
// printNumbers(1, 5);

// function printNumbers(from, to) {
//     let yourInteval = from;
//     let timerStop = setInterval (function () {
//         console.log(yourInteval);
//         if (yourInteval === to) {
//             clearInterval(timerStop);
//         }
//         yourInteval++;
//     }, 1000);
// };
// printNumbers(1, 5);


// задача 6:
// let messageDisplay = setInterval(() => {
//     console.log("Keep distance");
// }, 3000);
// setTimeout(()=>{
//     clearInterval(messageDisplay)
// }, 10000);

// задача 7:
// function firstCall() {
//     console.log(1);
//     secondCall();
//     setTimeout(function () {
//         console.log(3)
//     }, 3000);
//     console.log(4);
// }
// function secondCall() {
//     setTimeout(function () {
//         console.log(5)
//     }, 0);
//     console.log(6);
// }
// firstCall();

// задача 8:
// let jordan = {
//     name: "Michael",
//     age: 59,
//     nameMassage: function() {
//         console.log(`Name: ${this.name}`);
//     },
// };
// jordan.nameMassage();
// let messi = {
//     name: "Lionel",
//     age: 34,
// };
// jordan.nameMassage.call(messi);