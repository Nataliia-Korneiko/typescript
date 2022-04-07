interface IPerson {
  readonly name: string;
  age: number;

  greet(phrase: string): void;
}

interface IPilot {
  flyMessage(): void;
}

class Pilot implements IPerson, IPilot {
  constructor(public readonly name: string, public age: number) {
    this.checkAge();
  }

  private checkAge() {
    if (this.age < 28) {
      throw new Error('Пилот слишком молод!');
    }
  }

  public greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }

  public flyMessage(): void {
    console.log('Самолет набрал высоту, всем приятного полета!');
  }
}

abstract class Plane {
  protected pilot?: IPilot;

  public sitInPlane(pilot: IPilot): void {
    this.pilot = pilot;
  }

  public abstract startEngine(): boolean;
}

class Boeing extends Plane {
  public startEngine(): boolean {
    if (!this.pilot) {
      throw new Error('В кабине нет пилота!');
    }

    // Разогреваем реактивные турбины
    console.log('Запуск турбин!');

    this.pilot.flyMessage();
    return true;
  }
}

class Terrorist implements IPilot {
  bluff(phrase: string): void {
    console.log(phrase);
  }

  public flyMessage(): void {
    console.log(
      'Наши требования: 9 миллионов долларов, иначе мы убьем всех заложников!'
    );
  }
}

const boeing = new Boeing();
// const pilot = new Pilot('John', 32);
const pilot = new Terrorist();

// pilot.greet('Вас приветствует пилот самолета');
// boeing.sitInPlane(pilot);
// boeing.startEngine();

boeing.sitInPlane(pilot);
pilot.bluff('Мы захватили этот самолет!');
boeing.startEngine();

// type AddFunc = (n1: number, n2: number) => number;

// let add: AddFunc;

// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

interface AddFunc {
  (n1: number, n2: number): number;
}

let add: AddFunc;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
