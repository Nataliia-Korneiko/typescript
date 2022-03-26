// Описание простых (скалярных) типов
var num;
num = 10;
num = -10;
num = 10.99;
var str;
str = 'string';
var boolean;
boolean = true;
boolean = false;
var person1 = 'Allison';
person1 = 'RJ';
// Сложные типы
var arr1 = [];
arr1 = ['dog', 'cat'];
var arr2 = [];
arr2 = [1, 2];
var arr3 = [];
arr3 = [1, 'cat', {}];
var arr4;
arr4 = [{ name: 'Alex' }, { name: 'Deny' }];
var obj1;
var obj2;
var obj3;
obj3 = { name: 'John' };
obj3.name;
var db;
db = {
    id: 1,
    title: 'New product',
    info: {
        date: new Date()
    }
};
// Any
var some;
some = 'string';
some = 6;
some = { name: 'Anna' };
some.name;
var num2;
num2 = some;
// Unknown
var some2;
some2 = 3;
some2 = 'string';
// let str: string;
// str = some2;
if (typeof some2 === 'string') {
    str = some2;
}
// Tuple
var fixed;
fixed = ['str', 8];
// fixed = [8, 'str'];
// fixed = ['str', 8, 17];
fixed.push('new');
fixed.pop();
// Enum
var Toggle;
(function (Toggle) {
    Toggle[Toggle["ENABLE"] = 0] = "ENABLE";
    Toggle[Toggle["DISABLE"] = 1] = "DISABLE";
    Toggle[Toggle["PENDING"] = 2] = "PENDING";
})(Toggle || (Toggle = {}));
var service = {
    status: Toggle.ENABLE
};
if (service.status === Toggle.ENABLE) {
    console.log("it's active");
}
// Union Type
var union;
union = 12;
union = 'string';
union = true;
function combine(param1, param2) {
    if (typeof param1 === 'string' || typeof param2 === 'string') {
        return param1.toString() + param2.toString();
    }
    else {
        return param1 + param2;
    }
}
console.log(combine('str1', 'str2'));
console.log(combine(45, 12));
// Literal Type
var active;
active = 'start';
// active = 'stop';
var fruit = [];
function workWithArr(arr, value, action) {
    if (action === 'add') {
        arr.push(value);
    }
    else {
        var index = arr.indexOf(value);
        arr.splice(index, 1);
    }
    return arr;
}
workWithArr(fruit, 'Banana', 'add');
workWithArr(fruit, 'Melon', 'add');
workWithArr(fruit, 'Pear', 'add');
console.log(fruit);
workWithArr(fruit, 'Melon', 'delete');
console.log(fruit);
// Возвращаемые типы из функций
function print1() {
    console.log('Some log');
}
function print2(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Some error');
}
function createServerPerson(name) {
    return eval("\n  (()=> {\n    return {\n      name: '".concat(name, "'\n    }\n  })()\n  "));
}
function createPerson(name) {
    return createServerPerson(name);
}
var person2 = createPerson('Alex');
console.log(person2);
// Function Type
var foo1;
foo1 = function () { };
// foo1 = 6;
var foo2;
foo2 = function (param1, param2) {
    console.log('Some text');
};
function calc(num1, num2, callback) {
    return callback(num1, num2);
}
function foo3(num1, num2) {
    return num1 + num2;
}
var result = calc(1, 3, foo3);
console.log(result);
var person3 = {
    name: 'Allison',
    age: 25,
    showName: function () {
        console.log(this.name);
    }
};
// person3.name = 'Inna';
var person4 = {
    name: 'Matt',
    // age: 32,
    showName: function () {
        console.log(this.name);
    }
};
person3.showName();
person4.showName();
