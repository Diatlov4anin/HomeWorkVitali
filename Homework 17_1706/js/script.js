// задача 1:
// Перепишите через async await

// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }

//         })
// }
// loadJson('no-such-user.json')
//     .catch(alert);

// async function loadJson(url) {
//     const response = await fetch(url)
//     try {
//         if (response.status === 200) {
//             const user = await response.json()
//             return await user
//         }
//         throw new Error(response.status)
//     } catch (error) {
//         alert (error)
//     };
// };
// loadJson('no-such-user.json')


// задача 2:
// Напишите функцию, которая в качестве параметра будет принимать url и по нему делать запрос на получение данных
// Затем эти данные обрабатывать и выводить в консоль

// async function informationFromBack() {
//     const response = await fetch(url);
//     const resultInformation = await response.json()
//     console.log("Результат:", resultInformation);
// };
// informationFromBack();

// задача 3:
// Создать функцию-конструктор Person, которая будет содержать в себе имя, id, возраст, а также создать 
// прототип для этой функции-конструктора - метод, который 
// будет выводить в консоль сообщение Hello from prototype

const Person = function ({ name, id, age }) {
    this.name = name,
        this.id = id,
        this.age = age,
        this.greetings = function () {
            console.log("Hello from prototype");
        }
};

// задача 4:
// Создать 3 объекта самостоятельно. Сделать цепочку прототипов (объект должен наследоваться от предыдущего)

const oldPerson = new Person({ name: "Vasia", id: 01, age: 55 });
const youngPerson = new Person({ name: "Konstanton", id: 02, age: 21 });
const midlPerson = new Person({ name: "Masha", id: 03, age: 32 });

class ChildPerson extends Person {
    constructor(options) {
                super(options)
            }
           
};
const yourChildlPerson = new ChildPerson ({ name: "Nadia", id: 04, age: 01 });
