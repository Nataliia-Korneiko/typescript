class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class BigHouse {
  protected door = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (!this.door) {
      throw new Error('The door is closed!');
    }

    this.tenants.push(person);
    console.log('Person inside!');
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends BigHouse {
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error('Key to another door!');
    }

    return (this.door = true);
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);
