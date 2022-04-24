// interface IAddFn {
//   (a: number, b: number): number;
// }

// const addExpression: IAddFn = function (x, y) {
//   return x + y;
// };

type AddFn = (a: number, b: number) => number;

const addExpression: AddFn = function (x, y) {
  return x + y;
};

const addArrow: AddFn = (x, y) => {
  return x + y;
};

console.log(addExpression(2, 3));
console.log(addArrow(2, 3));

// -----------------------
type Fn = (a: number, b: number, c: number, ...restParams: number[]) => number;

const fn: Fn = (a, b, c, ...restParams) => {
  return 5;
};

fn(1, 2, 3, 5, 6, 7, 5, 9);

// -----------------------
type LogFn = (m: string) => number | void;

const log: LogFn = (message) => {
  console.log(message);
  return 5;
};

log('Hello!');

// -----------------------
enum PizzaSize {
  Small = 's',
  Medium = 'm',
  Large = 'l',
}

interface IPizza {
  size: PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large;
  toppings: string[];
  // logSize?: () => void;
  logSize?(): void;
  getSize(): string;
  addTopping(topping: string): void;
}

const pizza: IPizza = {
  size: PizzaSize.Small,
  toppings: ['sauce', 'mushrooms'],
  logSize() {
    console.log(this.size);
  },
  getSize() {
    return this.size;
  },
  addTopping(topping) {
    this.toppings.push(topping);
  },
};

console.log(pizza);

export {};
