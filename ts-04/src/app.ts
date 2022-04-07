class House {
  // private type: string;
  // private street: string;
  private tenants: string[] = [];

  constructor(public readonly type: string, protected street: string) {
    // this.type = t;
    // this.street = n;
  }

  public showAddress(this: House): void {
    console.log('Address: ' + this.street);
  }

  public showType(this: House): void {
    console.log('Type: ' + this.type);
  }

  public addTenant(name: string) {
    this.tenants.push(name);
  }

  public showTenants() {
    console.log(this.tenants);
  }
}

// const house = new House('wood', 'Middle-earth');
// const house2 = new House('Middle-earth-2');
// const house3 = new House('Middle-earth-3');
// house.showAddress();

// const houseCopy = { showAddress: house.showAddress, street: 'New address' };
// houseCopy.showAddress('string');

// house.addTenant('Alina');
// house.addTenant('Nikita');
// house.tenants.push('Eva');
// house.showTenants();

// console.log(house.type);

class StoneHouse extends House {
  private chargeOfTheHouse: string;

  constructor(street: string, generalTenant: string) {
    super('stone', street); // Вызов родительского конструктора

    this.chargeOfTheHouse = generalTenant;
  }

  public showAddress(): void {
    console.log('Address: ' + this.street);
  }

  public showTenants() {
    console.log('General: ' + this.chargeOfTheHouse);

    super.showTenants();
  }
}

const stoneHouse = new StoneHouse('Stone-world', 'Roma');

stoneHouse.addTenant('Oleg');
stoneHouse.addTenant('Inna');
stoneHouse.showTenants();

class UseStatic {
  private static count = 0;

  constructor() {
    UseStatic.count += 1;
  }

  public static itStaticMethod() {
    console.log('Run static method');
  }

  public showCount() {
    console.log(UseStatic.count);
  }
}

const obj1 = new UseStatic();
const obj2 = new UseStatic();
const obj3 = new UseStatic();

obj1.showCount();
obj2.showCount();
obj3.showCount();

UseStatic.itStaticMethod();

abstract class Plane1 {
  protected pilotInCabin = false;

  public sitInPlane() {
    this.pilotInCabin = true;
  }

  public abstract startEngine(): boolean;
}

class Maize1 extends Plane1 {
  public startEngine() {
    // Запускаем винты двигателя
    return true;
  }
}

class Boeing1 extends Plane1 {
  public startEngine() {
    // Разогреваем реактивные турбины
    return true;
  }
}

const maize1 = new Maize1();
const boeing1 = new Boeing1();

maize1.sitInPlane();
boeing1.sitInPlane();

console.log(maize1.startEngine());
console.log(boeing1.startEngine());
