//  компонент 3
import { employers, EmployersNames } from "./employers";
import { sponsors, Sponsors } from "./sponsors";

const emp = new EmployersNames(employers),
  startBusiness = new Sponsors(sponsors);

class MakeBusiness {
  constructor(owner, director = "Victor", sponsors, employers, money) {
    this.owner = owner;
    this.director = director;
    this.sponsors = sponsors;
    this.employers = employers;
    this.money = money;
  }

  satrt() {
    console.log(
      `We have a business. Owner: ${this.owner}, director: ${
        this.director
      }. Our budget: ${this.money}. And our employers: ${this.employers}
And we have a sponsors: 
${this.sponsors}
Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`
    );
  }
}

const makeBusiness = new MakeBusiness(
  "Sam",
  undefined,
  startBusiness.sumSponsors(),
  emp.getEmployersNames(),
  startBusiness.calcCash()
);

makeBusiness.satrt();
