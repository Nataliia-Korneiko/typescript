// const temps: Array<number> = [30, 31, 27, 28, 32];
// const temps: number[] = [30, 31, 27, 28, 32];
// const temps: (number | string)[] = [30, 31, 27, 28, 32, 'str1', 'str2'];

const temps: readonly number[] = [30, 31, 27, 28, 32];
// temps.push(5);

const t = temps.filter((t) => t > 30);
console.log(t);

const coords: [number, number, string] = [50.4501, 30.5234, 'str1'];
const rgb: [number, number, number] = [255, 0, 100];

// const arrA: number[] = [1, 2, 3, 4, 5];
const arrA = [1, 2, 3, 4, 5];
const arrB = [...arrA];

const entries = Object.entries({ a: 5, b: 10, c: 15 });

for (const entry of entries) {
  console.log(entry[1]);
}

console.log(temps, coords, rgb, arrB);

export {};
