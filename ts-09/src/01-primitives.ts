let age: number = 5;
let name: string = 'Mango';

let value: any = 5;
value = 'str';

// 💩
let user: object;
user = {};

let id: string | number | boolean = 5;
id = 'str';
id = true;

console.log(age, name, value, user, id);

export {};
