// Описание простых (скалярных) типов
let num: number;
num = 10;
num = -10;
num = 10.99;

let str: string;
str = 'string';

let boolean: boolean;
boolean = true;
boolean = false;

let person1 = 'Allison';
person1 = 'RJ';

// Сложные типы
let arr1: string[] = [];
arr1 = ['dog', 'cat'];

let arr2: number[] = [];
arr2 = [1, 2];

let arr3: any[] = [];
arr3 = [1, 'cat', {}];

let arr4: { name: string }[];
arr4 = [{ name: 'Alex' }, { name: 'Deny' }];

let obj1: object;
let obj2: {};
let obj3: { name: string };
obj3 = { name: 'John' };
obj3.name;

let db: {
  id: number;
  title: string;
  info?: {
    date: Date;
    isNew?: boolean;
  };
};

db = {
  id: 1,
  title: 'New product',
  info: {
    date: new Date(),
    // isNew: true,
  },
};

// Any
let some: any;
some = 'string';
some = 6;
some = { name: 'Anna' };
some.name;

let num2: number;
num2 = some;

// Unknown
let some2: unknown;
some2 = 3;
some2 = 'string';

// let str: string;
// str = some2;

if (typeof some2 === 'string') {
  str = some2;
}

// Tuple
let fixed: [string, number];
fixed = ['str', 8];
// fixed = [8, 'str'];
// fixed = ['str', 8, 17];

fixed.push('new');
fixed.pop();

// Enum
enum Toggle {
  ENABLE,
  DISABLE,
  PENDING,
}

const service = {
  status: Toggle.ENABLE,
};

if (service.status === Toggle.ENABLE) {
  console.log("it's active");
}

// Union Type
let union: number | string | boolean;
union = 12;
union = 'string';
union = true;

function combine(param1: string | number, param2: string | number) {
  if (typeof param1 === 'string' || typeof param2 === 'string') {
    return param1.toString() + param2.toString();
  } else {
    return param1 + param2;
  }
}

console.log(combine('str1', 'str2'));
console.log(combine(45, 12));

// Literal Type
let active: 'start' | 'end';
active = 'start';
// active = 'stop';

const fruit: string[] = [];

function workWithArr(arr: string[], value: string, action: 'add' | 'delete') {
  if (action === 'add') {
    arr.push(value);
  } else {
    const index = arr.indexOf(value);

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
function print1(): void {
  console.log('Some log');
}

function print2(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Some error');
}

function createServerPerson(name: string) {
  return eval(`
  (()=> {
    return {
      name: '${name}'
    }
  })()
  `);
}

function createPerson(name: string): { name: string } {
  return createServerPerson(name);
}

const person2 = createPerson('Alex');

console.log(person2);

// Function Type
let foo1: Function;
foo1 = () => {};
// foo1 = 6;

let foo2: (param1: number, param2: string) => void;
foo2 = (param1: number, param2: string) => {
  console.log('Some text');
};

function calc(
  num1: number,
  num2: number,
  callback: (arg1: number, arg2: number) => number
) {
  return callback(num1, num2);
}

function foo3(num1: number, num2: number) {
  return num1 + num2;
}

const result = calc(1, 3, foo3);

console.log(result);

// Custom Types
type PersonType = {
  readonly name: string;
  age?: number;
  showName: () => void;
};

const person3: PersonType = {
  name: 'Allison',
  age: 25,
  showName() {
    console.log(this.name);
  },
};

// person3.name = 'Inna';

const person4: PersonType = {
  name: 'Matt',
  // age: 32,
  showName() {
    console.log(this.name);
  },
};

person3.showName();
person4.showName();
