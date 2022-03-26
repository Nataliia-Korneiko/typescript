// 1. Задайте правильные ts типы, для классических js.
var age;
age = 50;
var username;
username = 'Max';
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback;
callback = function (a) {
    return 100 + a;
};
// 2. Задавайте тип для переменной в которую можно сохранить любое значение.
var anything;
anything = -20;
anything = 'Text';
anything = {};
// 3. Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
var some3;
some3 = 'Text';
var str3;
if (typeof some3 === 'string') {
    str3 = some3;
}
// 4. Сделайте неизменяемый массив со строго описанными типами. Массив для примера.
var person;
person = ['Max', 21];
// 5. Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
var page = {
    load: Load.READY
};
if (page.load === Load.LOADING) {
    console.log('Страница загружается');
}
if (page.load === Load.READY) {
    console.log('Страница загружена');
}
// 6. Сделайте переменную, которая может принимать или строку или число.
var copy;
// 7. Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'.
var literal;
// 8. Укажите типы для следующих функций.
function showMessage(message) {
    console.log(message);
}
function calculator(num1, num2) {
    return num1 + num2;
}
function customErr() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
