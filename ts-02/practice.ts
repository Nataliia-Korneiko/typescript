// 1. Задайте правильные ts типы, для классических js.
let age: number;
age = 50;

let username: string;
username = 'Max';

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

let callback: (a: number) => number;
callback = (a) => {
  return 100 + a;
};

// 2. Задавайте тип для переменной в которую можно сохранить любое значение.
let anything: any;
anything = -20;
anything = 'Text';
anything = {};

// 3. Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
let some3: unknown;
some3 = 'Text';

let str3: string;

if (typeof some3 === 'string') {
  str3 = some3;
}

// 4. Сделайте неизменяемый массив со строго описанными типами. Массив для примера.
let person: [string, number];
person = ['Max', 21];

// 5. Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
enum Load {
  LOADING,
  READY,
}

const page = {
  load: Load.READY,
};

if (page.load === Load.LOADING) {
  console.log('Страница загружается');
}

if (page.load === Load.READY) {
  console.log('Страница загружена');
}

// 6. Сделайте переменную, которая может принимать или строку или число.
let copy: string | number;

// 7. Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'.
let literal: 'enable' | 'disable';

// 8. Укажите типы для следующих функций.
function showMessage(message: string): void {
  console.log(message);
}

function calculator(num1: number, num2: number): number {
  return num1 + num2;
}

function customErr(): never {
  throw new Error('Error');
}

// 9. Создайте свой тип данных на основе имеющихся данных.
type PageType = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  },
};

const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};
