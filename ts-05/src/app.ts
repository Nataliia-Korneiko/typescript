// Intersection Types
type Admin = {
  name: string;
  privileges: string[];
};

type User = {
  name: string;
  startDate: Date;
};

type AdminUser = Admin & User;

interface Admin2 {
  name: string;
  privileges: string[];
}

interface User2 {
  name: string;
  startDate: Date;
}

interface AdminUser2 extends Admin, User {}

// Type Guards
type ComplexType = string | number;

function combine(a: ComplexType, b: ComplexType) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type AdminOrUser = Admin2 | User2;

function showFields(el: AdminOrUser) {
  if ('startDate' in el) {
    console.log(el.startDate);
  }

  if ('privileges' in el) {
    console.log(el.privileges);
  }

  console.log(el.name);
}

// Type Guards для классов
abstract class Guy {
  constructor(public name: string) {}
}

class Good extends Guy {
  advice() {
    console.log('advice');
  }
}

class Bad extends Guy {
  insult() {
    console.log('insult');
  }
}

const good = new Good('John');
const bad = new Bad('Matt');

function guys(user: Guy) {
  if (user instanceof Good) {
    user.advice();
  }

  if (user instanceof Bad) {
    user.insult();
  }
}

// Type Casting
// v1:
// const input = <HTMLInputElement>document.getElementById('inputEmail')!;

// input.value;

// v2:
// const input = document.getElementById('inputEmail') as HTMLInputElement;

// input.value;

// v3:
const input = document.getElementById('inputEmail');

if (input) {
  (input as HTMLInputElement).value;

  const newInput = input as HTMLInputElement;

  newInput.value;
}

// Index Properties
interface Person {
  name: string;
  age: number;
  // [x: string]: string | number;
  [x: string]: any;
}

const user: Person = {
  name: 'John',
  age: 38,
  gender: 'MAN',
  country: 'USA',
};

// Optional Chaining
interface Person2 {
  name: string;
  additionInfo?: {
    someInfo: string;
  };
}

const user2: Person2 = {
  name: 'Allison',
};

// if (user2.additionInfo) {
//   user2.additionInfo.someInfo;
// }

user2?.additionInfo?.someInfo;

// Nullish Coalescing
const userInput = '';
// const store = userInput || 'DEFAULT';
const store = userInput ?? 'DEFAULT'; // userInput = null -> 'DEFAULT'

console.log(store);

// Перегрузка операторов (function overloads)
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;

function add(a: string | number, b: string | number) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

// Generics - общая концепция
// let arr: number[] | string[];
// arr = ['one', 'two', 1];

// let arr: any[];
// arr = ['one', 'two', 1, null, true];

// let arr: Array<string | number>;
// arr = ['one', 'two', 1];

let arr: (string | number)[];
arr = ['one', 'two', 1];

const promise: Promise<string> = new Promise((resolve) => {
  resolve('String');

  // setInterval(() => {
  //   resolve('Done!');
  // }, 1000);
});

promise.then((data) => {
  console.log(data);
});

// Generic function-method
const a = {
  name: 'Alex',
};

const b = {
  age: 32,
};

// function merge(objA: object, objB: object) {
//   return Object.assign({}, objA, objB);
// }

// const merged = merge(a, b) as { name: string; age: number };
// merged.name;

function merge<T, U>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

const merged = merge(a, b);
merged.name;

type Adult = {
  name: string;
};

type Fields = {
  age: number;
};

const info = merge<Adult, Fields>({ name: 'RJ' }, { age: 41 });

// Extends - для ограничения типа
function unite<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const united = unite({ name: 'Alex' }, { age: 28 });
merged.name;

interface ILength {
  length: number;
}

function getLength<T extends ILength>(str: T) {
  return str.length;
}

const obj = {
  length: 10,
};

console.log(getLength('text')); // 4
console.log(getLength(['text1', 'text2', 'text3'])); // 3
console.log(getLength(obj)); // 10

// keyof
function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

const field = extractValue({ name: 'Alina' }, 'name');
console.log(field);

// Generic Classes
class StoreClass<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  getItems(): T[] {
    return this.data;
  }
}

interface IPerson {
  name: string;
}

const storeUsers = new StoreClass<IPerson>();

storeUsers.addItem({
  name: 'Inna',
});

storeUsers.addItem({
  name: 'Oleg',
});

storeUsers.addItem({
  name: 'Nikita',
});

console.log(storeUsers.getItems());

const storeAges = new StoreClass<number>();

storeAges.addItem(21);
storeAges.addItem(24);
storeAges.addItem(19);

console.log(storeAges.getItems());

// Utility Types - Partial
interface IUser {
  name: string;
  age: number;
}

function createUser(name: string): IUser {
  const user: Partial<IUser> = {
    name,
  };

  // user.age = 21;

  return user as IUser;
}

// Utility Types - Readonly
const array: Readonly<string[]> = ['One', 'Two', 'Three'];

// array.push('Four');
// array.pop();

interface INewPerson {
  name: string;
}

const objPerson: Readonly<INewPerson> = {
  name: 'Roma',
};

// objPerson.name = 'Matt';

// Utility Types - Pick
interface Page {
  title: string;
  annotation: string;
  numberPage: number;
}

const pageAnnotation: Pick<Page, 'annotation' | 'numberPage'> = {
  annotation: 'Small page',
  numberPage: 14,
};
