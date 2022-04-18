// Декораторы классов
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString); // 2
    console.log(constructor); // 3
  };
}

function AddProperty() {
  return function (constructor: Function) {
    console.log('MODIFY'); // 1
    constructor.prototype.modify = true;
  };
}

@Logger('LOGGING - CONTROLLER')
@AddProperty()
class Controller {
  public id = 1;
  // public modify?: boolean;
  public modify = false;
}

const controller = new Controller();
console.log('Is modified?', controller.modify); // 4

// -----------------------
interface IDecoration {
  parent: string;
  template: string;
}

function ControllerDecoration(config: IDecoration) {
  return function <T extends { new (...args: any[]): { content: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      private element: HTMLElement;
      private parent: HTMLElement;
      constructor(...arg: any[]) {
        super(...arg);
        this.parent = document.getElementById(config.parent)!;
        this.element = document.createElement(config.template);

        this.element.innerHTML = this.content;

        this.parent.appendChild(this.element);
      }
    };
  };
}

@ControllerDecoration({
  parent: 'app',
  template: 'H1',
})
class UserController {
  public content = 'My custom controller';
}

const controller1 = new UserController();
const controller2 = new UserController();
const controller3 = new UserController();

// Декораторы методов
function ShowMeParams(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log('target:', target);
  console.log('name:', name);
  console.log('descriptor:', descriptor);
}

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value as Function;

  return {
    configurable: true,
    enumerable: false,
    get() {
      return method.bind(this);
    },
  };
}

class Notifier {
  public content = 'Show message in class';

  @ShowMeParams
  @AutoBind
  showMessage() {
    console.log(this.content);
  }
}

const notifier = new Notifier();
const showMessage = notifier.showMessage;

notifier.showMessage();
showMessage();

// -----------------------
function AddTax(taxPercent: number) {
  return function (_: any, _2: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value as Function;

    return {
      configurable: true,
      enumerable: false,
      get() {
        return (...args: any[]) => {
          const result = method.apply(this, args);

          return result + (result / 100) * taxPercent;
        };
      },
    };
  };
}

class Payment {
  @AddTax(20)
  pay(money: number): number {
    return money;
  }
}

const payment = new Payment();
console.log('Amount with tax:', payment.pay(100));

// Декораторы параметров
function CheckEmail(target: any, nameMethod: string, position: number) {
  console.log('target:', target);
  console.log('position:', position);
  console.log('nameMethod:', nameMethod);

  if (!target[nameMethod].validation) {
    target[nameMethod].validation = {};
  }

  Object.assign(target[nameMethod].validation, {
    [position]: (value: string) => {
      if (value.includes('@')) {
        return value;
      }

      throw new Error('Invalid field');
    },
  });
}

function Validation(_: any, _2: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;

  return {
    configurable: true,
    enumerable: false,
    get() {
      return (...args: any[]) => {
        if (method.validation) {
          args.forEach((item, index) => {
            if (method.validation[index]) {
              args[index] = method.validation[index](item);
            }
          });
        }

        return method.apply(this, args);
      };
    },
  };
}

class Person {
  @Validation
  setEmail(@CheckEmail email: string) {
    console.log(email);
  }
}

const person = new Person();

// person.setEmail('testgmail.com');
person.setEmail('test@gmail.com');

// Декораторы свойств
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required'],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive'],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];

  if (!objValidatorConfig) {
    return true;
  }

  let isValid = true;

  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }

  return isValid;
}

class Student {
  @Required
  name: string;
  @PositiveNumber
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

// const student = new Student('', -1);
const student = new Student('Alex', 29);

if (!validate(student)) {
  console.log('Error');
} else {
  console.log('Ok');
}
