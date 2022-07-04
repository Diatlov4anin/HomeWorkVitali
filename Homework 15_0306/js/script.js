// let student = {
//     name: "Your name",
//     age: "Your age",
//     id: 1,
// };

// задача 1:
// const mapStudent = Object.entries(student);
// const identificateStydent = new Map (mapStudent);
// identificateStydent.set("isMan", true);
// identificateStydent.set("surname", "Your surname");
// console.log(identificateStydent.get("name"));

// задача 2:
// for (let keysStudent of identificateStydent.keys()) {
//     console.log(keysStudent);
// };
// for (let valueStudent of identificateStydent.values()) {
//     console.log(valueStudent);
// };
// for (let entiriesStudent of identificateStydent.entries()) {
//     console.log(entiriesStudent);
// };

// задача 3:
// let amount = {
//     apple: 440,
//     burger: 316,
//     juice: 1120,
// };
// const halfAmount = Object.fromEntries(
//     Object.entries(amount).map(([fruit, amountFruit]) => {
//     return [fruit, amountFruit / 2];
// }));

// задача 4:
// function showAllAmount(obj) {
//     let sum = 0;
//     for (let fruit of Object.values(obj)) {
//         sum += fruit;
//     };
//     return sum
// };
// showAllAmount(halfAmount);

// задача 5:
// function getUniqueFruits (arr) {
//     const uniqFruit = Object.entries(arr);
//     return [...new Set(uniqFruit)];
// };
// getUniqueFruits (amount);

// задача 6:
// const weather =
// {
//     "coord": {
//         "lon": -122.08,
//         "lat": 37.39
//     },
//     "weather": [
//         {
//             "id": 800,
//             "main": "Clear",
//             "description": "clear sky",
//             "icon": "01d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 282.55,
//         "feels_like": 281.86,
//         "temp_min": 280.37,
//         "temp_max": 284.26,
//         "pressure": 1023,
//         "humidity": 100
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 1.5,
//         "deg": 350
//     },
//     "clouds": {
//         "all": 1
//     },
//     "dt": 1560350645,
//     "sys": {
//         "type": 1,
//         "id": 5122,
//         "message": 0.0139,
//         "country": "US",
//         "sunrise": 1560343627,
//         "sunset": 1560396563
//     },
//     "timezone": -25200,
//     "id": 420006353,
//     "name": "Mountain View",
//     "cod": 200
// };

// const arrayWeather = JSON.stringify(weather);
// const cloneWeather = JSON.parse(arrayWeather);


// задача 7:
// const time = 1654420481877;

// function getTime(origTime) {
//     let date = new Date(origTime);
//     let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
//     let month = date.getMonth() + 1 < 10 ? `0${date.getMonth()}` : date.getMonth();
//     let year = date.getFullYear();
//     let minutes = date.toLocaleTimeString();
//     return `${year}.${month}.${day} (${minutes})`;
// };
// let resultTime = getTime(time);
