// Задача 1
// Создайте в HTML документе кнопку, и создайте событие клика (3 разными способами), 
// по клику на кнопку в консоль выводить фразу по вашему усмотрению

const button = document.querySelector('.button');
button.onclick = function () {
    console.log('Ну почти всё');
};
button.addEventListener("click", function (clickButton) {
    console.log('Или ничего');
});

function showConsole() {
    console.log('не важно');
    button.removeEventListener("click", showConsole);
}

button.addEventListener("click", showConsole);

//задача 2:
// Создать еще одну кнопку. Повесить на нее слушатель события на двойное нажатие. Вывести запись в консоль

const buttonEvent = document.querySelector('.button_event');
function showDblButton() {
    console.log('К следующему занятию');
};
buttonEvent.addEventListener("dblclick", showDblButton);

// задача 3:
// Создать поле в котором будет событие наведение мыши и вывод координат в консоль
const blockMoveMouse = document.querySelector('.block-activ-mouse');

blockMoveMouse.addEventListener("mousemove", function (event) {
    console.log(event.clientX, event.clientY);
});

// задача 4:
// Создать событие скролла и вывод координат в консоль
window.addEventListener('scroll', function (event) {
		console.log(`${scrollX}px ${scrollY}px`);
});