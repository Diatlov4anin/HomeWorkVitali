// задача 1:
// let students = [
//     {
//         name: 'Alexey',
//         id: 123,
//         marks: 9
//     },
//     {
//         name: 'Vitalik',
//         id: 101,
//         marks: 5
//     },
//     {
//         name: 'Tanya',
//         id: 200,
//         marks: 7
//     },
//     {
//         name: 'Sasha',
//         id: 115,
//         marks: 10
//     }
// ];

// вариант 1:
// function showNameStudents(arr){
//     let laggingStudents = []
//      arr.forEach(item => {
//         if (item.marks < 8) laggingStudents.push(item.name)
//     });
// };
// showNameStudents(students);

// вариант 2:
// function showNameStudents(arr){
//     let laggingStudents = arr.reduce((acc, item) => {
//         if (item.marks < 8) acc.push(item.name)
//         return acc
//     },[])
// };
// showNameStudents(students);


// задача 2:
// вариант 1:
// function getAverageMarks(arr) {
//     let filterIdStudent = [];
//     arr.forEach(item => {
//         if (item.id > 120) filterIdStudent.push(item)
//     })
//     let AverageMarksStudents = 0;
//     filterIdStudent.forEach(item => AverageMarksStudents += item.marks / filterIdStudent.length)
// };
// getAverageMarks(students);

// вариант 2:
// function getAverageMarks(arr) {
//     let filterIdStudent = arr.reduce((acc, item) => {
//         if (item.id > 120) acc.push(item)
//         return acc
//     }, []);
//     return filterIdStudent.reduce((acc, item) => acc + item.marks, 0) / filterIdStudent.length;
// };
// getAverageMarks(students);


// задача 3:
// let students = [
//     { name: 'Alexey', id: 123, marks: 9 },
//     { name: 'Vitalik', id: 101, marks: 5 },
//     { name: 'Tanya', id: 200, marks: 7 },
//     { name: 'Sasha', id: 115, marks: 10 },
//     { name: 'Kolya', id: 440, marks: 5 },
//     { name: 'Dima', id: 170, marks: 7 }
// ];
// function getGoodStudents(arr) {
//     let filterNameStudent = arr.reduce((acc, item) => {
//         if (item.id < 200 && item.marks > 5) acc.push(item.name)
//         return acc
//     }, []);
// };
// getGoodStudents(students);