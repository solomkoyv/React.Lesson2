// компонент 1
const employers = [
  "Alex",
  "",
  "ludmila",
  "Viktor",
  "",
  "oleg",
  "iNna",
  "Ivan",
  "Alex",
  "Olga",
  " Ann"
];

class EmployersNames {
  constructor(employers) {
    this.employers = employers
      .filter(name => name.length)
      .map(name => name.toLowerCase().trim());
  }

  getEmployersNames() {
    return this.employers;
  }
}

// const emp = new EmployersNames(employers);

export { employers, EmployersNames };
