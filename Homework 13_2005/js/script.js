//задача 1:
// let str = prompt ("Write \"My favorite composer is - ....\"");
// function isMozartHere(str) {
// alert (str.toLowerCase().trim().includes("mozart"))
// };
// isMozartHere(str);


// задача 2:
// function showUppercaseFirstLetter(str) {
//     let lowStr = str.toLowerCase()
//     return lowStr[0].toUpperCase() + lowStr.slice(1)
// };
// console.log(showUppercaseFirstLetter("VasIa, YoU aRe UsEr"));


// задача 3;
// let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"];
// let teamA = harryPotterTeam.filter(item => /a/.exec(item));
// let teamH = harryPotterTeam.filter(item => /H/.exec(item));
// console.log(teamA);
// console.log(teamH);
// еще Гермиону отобрал таким образом:
// let teamH = harryPotterTeam.filter(item => {
//     return !item.indexOf("H")});


// задача 4:
// let arr = [6, 3, "ten", 1, true, "4"];
// let numEl = arr.filter((item) => {
//     return item === +item
// });
// function showSum(arr) {
//     let sum = 0;
//     arr.forEach((item) => {
//         sum += item
//     })
//     return sum
// };
// console.log(showSum(numEl));
// function showMult(arr) {
//     let mult = 1;
//     arr.map(item => {
//         mult *= item
//     })
//     return mult
// };
// console.log(showMult(numEl));


// задача 5 версия 1:
// let numArr = [1, 3, 5, 7, 9, 11];
// let squareNumArr = [];
// numArr.forEach(item => {
//     squareNumArr.push(item ** 2)
// });
// console.log(squareNumArr);

// задача 5 версия 2:
// let numArr = [1, 3, 5, 7, 9, 11];
// let squareNumArr = numArr.map(item => {
//     return item ** 2
// });
// console.log(squareNumArr);


// задача 6:
// let frase = `Роман «1984» наряду с такими произведениями, как «Мы» Евгения Замятина (1920),
//  «О дивный новый мир» Олдоса Хаксли (1932) и «451 градус по Фаренгейту» Рэя Брэдбери (1953)
//   считается одним из образцов антиутопии`;
// let needFrase = "\«451 градус по Фаренгейту\»";
// let lengthNeedFrase = +needFrase.length;
// function showFrase(str, num) {
//     let getStr = +str.indexOf("451", 0)
//     return str.substr(getStr - 1, num)
// };
// console.log(showFrase(frase, lengthNeedFrase));


// задача 7:
// let students = [{ name: 'Alexey', id: 123, marks: 9 },
// { name: 'Vitalik', id: 101, marks: 5 },
// { name: 'Tanya', id: 200, marks: 7 },
// { name: 'Sasha', id: 115, marks: 10 }
// ];
// let findStudent = students.filter(item => {
//     return item.id === 101;
// });


// задача 8:
// let students = [{ name: 'Alexey', id: 123, marks: 9 },
// { name: ' Vitalik', id: 101, marks: 5 },
// { name: 'Tanya ', id: 200, marks: 7 },
// { name: 'Sasha', id: 115, marks: 10 }
// ];
// let goodRatingStudents = students.filter(item => {
//     return item.marks >= 7
// });
// let nameStudents = [];
//  goodRatingStudents.forEach(item => {
//     nameStudents.push(item.name.toLowerCase().trim())
// });


// задача 9:
// let javaScriptTypes = ["number", "null", "undefined", "string"];
// javaScriptTypes.splice(3, 0, true, {}, Symbol, "bigInt");
// javaScriptTypes.push(true, {}, Symbol, "bigInt");
// let fullTypes = javaScriptTypes.concat(true, {}, Symbol, "bigInt");


// задача 10:
// let salary = [1000, 500, 1200, 230];
// function objIsArr(arr) {
//     if (Array.isArray(arr) === true) {
//        console.log(showArray(arr));
//     } else {
//         console.log("Не является массивом");
//     }
// };
// function showArray(arr) {
//     let copyArr = []
//     arr.forEach((item, index) => {
//         copyArr[item, index] = arr[item, index]
//     })
//     copyArr.sort((min, max) => min - max)
//     return copyArr.reverse()
// };
// objIsArr(salary);


// задача 11:
// let serials = ["How i met your mom", "Friends", "Big bang theory"];
// let strSerials = serials.join("; ");
