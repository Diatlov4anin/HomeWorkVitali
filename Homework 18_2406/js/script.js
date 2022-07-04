// задача 1:
// Создать класс разработчика, у которого будут свойства: 
// имя, язык программирования, метод, который в консоль выводит фразу " "имя" 
// работает с "язык программирования" "
// А также класс студента, который будет расширен с помощью класса
//  разработчика. Добавьте туда свойство: номер группы

// class Developer {
//     constructor(options) {
//         this.name = options.name,
//             this.langProgramming = options.langProgramming
//     }
//     showMessage() {
//         console.log(this.name, " работает с ", this.langProgramming);
//     };
// };
// class Student extends Developer {
//     constructor(options) {
//         super(options)
//         this.numGroup = options.numGroup
//     }
// };

// задача 2:
// Написать метод, который будет в конце строки добавлять точку. Метод должен быть в прототипе String 
String.prototype.addDot = function(addPoint) {
    return `${addPoint}.`
};
"".addDot("Поставь точку здесь ->");