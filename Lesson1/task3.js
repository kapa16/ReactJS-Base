class Human {
  constructor(name, age, dateOfBirth ) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
  }

  displayInfo() {
    return `Имя: ${this.name}, возраст: ${this.age}, День рождения: ${this.dateOfBirth}`;
  }
}

class Employee extends Human {
  constructor(salary, department , ...props) {
    super(...props);
    this.salary = salary;
    this.department = department;
  }

  displayInfo() {
    return `${super.displayInfo()} зарплата: ${this.salary}, отдел: ${this.department}` ;
  }
}

class Developer extends Employee {
  constructor(...props) {
    super(...props);
    this._manager = null;
  }

  set manager(manager) {
    this._manager = manager;
  }

  get  manager() {
    return this._manager;
  }
}

class Manager extends Employee {
  constructor(...props) {
    super(...props);
    this.developers = [];
  }

  addDeveloper(developer) {
    this.developers.push(developer);
  }

  delDeveloper(developer) {
    const index = this.developers.indexOf(developer);
    this.developers.slice(index, 1);
  }
}
console.log('task3 ---------------------------------');

const human = new Human('Ivan', 36, '25.10.1983');
console.log(human.displayInfo());

const employee = new Employee(58000, 'IT', 'Tom', 30, '13.10.1989');
console.log(employee.displayInfo());

const dev1 = new Developer(58000, 'IT', 'Tom', 30, '13.10.1989');
const dev2 = new Developer(72000, 'IT', 'Sam', 25, '13.10.1994');

const manager = new Manager(72000, 'IT', 'Sam', 25, '13.10.1994');
manager.addDeveloper(dev1);
manager.addDeveloper(dev2);
manager.delDeveloper(dev2);
console.log(`Manager is: ${manager.displayInfo()}`);

dev1.manager = manager;
console.log(`Manager for dev1: ${dev1.manager.displayInfo()}`);