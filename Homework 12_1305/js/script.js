//задача 1:
// let month = prompt("Укажите порядковый номер месяца, для определения колличества дней");
// function howManyDays(month) {
//     let days;
//     switch (+month) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             days = "31 день";
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             days = "30 дней";
//             break;
//         case 2:
//             days = "28 дней, 29 дней в высокосный год";
//             break;
//     }
//     return days;
// }
// alert(howManyDays(month))

// задача 2:
// let number1 = prompt("Укажите первое значение для умножения");
// let number2 = prompt("Укажите второе значение для умножения");
// let checksMultiplication = function (number1, number2) {
//     let multiplicationNumber = number1 * number2;
//     if (multiplicationNumber % 2 === 0) {
//         return "Четное"
//     } else {
//         return "Не четное"
//     };
// };
// checksMultiplication(number1, number2);

// задача 3:
// let student = {
//     Name: "Vitali",
//     Surname: "Urbanovich",
//     Age: 35,
//     CEFR: "B1",
// };
// delete (student.CEFR);

// задача 4:
// let book = {
//     numberOfPages: 545,
//     cover: true,
//     isTheAuthorAlive: false,
//     isBestseller: true,
//     booksEditions: 20000000,
// };
// function showBoolenTypeBook(obj){
//     for (let key in obj){
//         if (typeof obj[key] == "boolean"){
//             console.log(key, obj[key]);
//         };
//     };
// };
// showBoolenTypeBook(book);


// задача 5:
// let train = {
//     locomotiveLength: 25,
//     totalCoachCars: 4,
//     coachLength: 15,
// };
// let calculateTrainLength = function(obj) {
//     return (obj.totalCoachCars * obj.coachLength + obj.locomotiveLength)};
// calculateTrainLength (train);


// задача 6:
// let myLovelyCar = {
//     make: "Mercedes-Benz",
//     color: "Selenite grey magno",
//     numberOfDoors: 5,
//     hpEnginer: 450,
//     vEnginerCM: 4000,
//     boxGear: "robotic",
// };
// let cloneCar = {};
// for (let key in myLovelyCar) {
//     cloneCar[key] = myLovelyCar[key]
// };
// let copyCar = Object.assign({}, myLovelyCar);

// задача 7:
// function animal(obj) {
//     return (`This ${obj.color} ${obj.name} has ${obj.legs} legs`)
// };
// let animalObj = {
//     name: "cat",
//     legs: 4,
//     color: "black",
// };
// animal(animalObj);


// задача 8:
// let numOne = +prompt ("Введите первое число для умножения", 0);
// let numTwo = +prompt ("Введите второе число для умножения", 0);
// function showIsEvenOrOdd (numOne, numTwo, showIsEven, showIsOdd) {
//     let numSum = numOne*numTwo;
//     if (numSum % 2 === 0) {
//         showIsEven();
//     } else if (numSum % 2 === 1) {
//         showIsOdd();
//     } else {
//         console.log("Вы ввели некорректные числа")
//     };
// };
// function showIsEvenNumber(){
//     console.log(`Произведенное число четное`);
// };
// function showIsOddNumber() {
//     console.log(`Произведенное число не четное`);
// };
// showIsEvenOrOdd(numOne, numTwo, showIsEvenNumber, showIsOddNumber);


// задача 9:
// let studentID = {
// name : "Егор ",
// surname : "Потапов ",
// group : 4 ,
// showfullCharacteristic() {
//     console.log("Это студент " + this.name + this.surname + "из группы " +  this.group)
// },
// };
// studentID.showfullCharacteristic();

// задача 10:
// function CreateAnimal(animal, numPaw, isPredator, nickName) {
//     this.animal = animal;
//     this.numPaw = numPaw;
//     this.isPredator = true;
//     this.nickName = nickName;
// };
// let animal = new CreateAnimal ("Tiger", 4, 'predator', "Киса");

