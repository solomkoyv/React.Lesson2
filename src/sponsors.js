//  компонент 2

const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ["SRL", "PLO", "J&K"],
  rus: ["RusAuto", "SBO"]
};

class Sponsors {
  constructor({ cash, eu, rus }) {
    this.cash = cash;
    this.eu = eu;
    this.rus = rus;
  }
  calcCash() {
    return this.cash.reduce((res, x) => res + x, 0);
  }
  sumSponsors() {
    return [...this.eu, ...this.rus, "unexpected sponsor"];
  }
}

// const startBusiness = new Sponsors(sponsors);
export { sponsors, Sponsors };
