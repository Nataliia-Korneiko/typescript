interface PluginConfig {
  readonly selector: string;
  perPage?: number;
  startIndex?: number;
  draggable?: boolean;
}

const config: PluginConfig = {
  selector: '#plugin-1',
  perPage: 2,
  // startIndex: 0,
  // draggable: false,
};

interface Employees {
  [key: string]: number;
}

const employees: Employees = {
  mango: 5,
  poly: 10,
  ajax: 15,
  wiki: 20,
};

const entries = Object.entries(employees);
let bestEmployeeName = '';
let bestEmployeeProIndex = 0;

for (const [name, value] of entries) {
  if (bestEmployeeProIndex <= value) {
    bestEmployeeName = name;
  }
}

console.log(config, bestEmployeeName);

export {};
