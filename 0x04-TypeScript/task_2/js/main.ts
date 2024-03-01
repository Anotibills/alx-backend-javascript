interface WorkTasks {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTasks(): string;
}

export class Director implements WorkTasks {
  workFromHome = () => 'Working from home';
  getCoffeeBreak = () => 'Getting a coffee break';
  workTasks = () => 'Getting to director tasks';
}

export class Teacher implements WorkTasks {
  workFromHome = () => 'Cannot work from home';
  getCoffeeBreak = () => 'Cannot have a break';
  workTasks = () => 'Getting to work';
}

export const createEmployee = (salary: number | string): Teacher | Director =>
  Number(salary) < 500 ? new Teacher() : new Director();

export function isDirector(employee: WorkTasks): employee is Director {
  return (employee as Director).workTasks !== undefined;
}

export function executeWork(employee: WorkTasks): string {
  return isDirector(employee) ? employee.workTasks() : employee.workTasks();
}

type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string {
  switch (todayClass) {
    case "Math":
      return "Teaching Math";
    case "History":
      return "Teaching History";
    default:
      throw new Error("Invalid class");
  }
}

console.log(teachClass("Math"));
console.log(teachClass("History"));
