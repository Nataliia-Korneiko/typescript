interface ILength {
  length: number;
}

const logLength = <T extends ILength>(arg: T) => {
  console.log(arg.length);
};

logLength([1, 2, 3, 4, 5]);
logLength('qweqweqwe');
// logLength(5);

// -----------------------
interface IPerson {
  firstName: string;
  lastName: string;
}

const addFullName = <P extends IPerson>(person: P) => {
  return {
    ...person,
    fullName: `${person.firstName} ${person.lastName}`,
  };
};

console.log(
  addFullName({
    firstName: 'Mango',
    lastName: 'Doge',
  })
);

console.log(
  addFullName({
    firstName: 'Mango',
    lastName: 'Doge',
    age: 2,
  })
);

export {};
