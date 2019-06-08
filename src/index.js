"use strict";

var _employers = require("./employers");

var _sponsors = require("./sponsors");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var emp = new _employers.EmployersNames(_employers.employers),
    startBusiness = new _sponsors.Sponsors(_sponsors.sponsors);

var MakeBusiness =
/*#__PURE__*/
function () {
  function MakeBusiness(owner, director, sponsors, employers, money) {
    _classCallCheck(this, MakeBusiness);

    this.owner = owner;
    this.director = director || "Victor";
    this.sponsors = sponsors;
    this.employers = employers;
    this.money = money;
  }

  _createClass(MakeBusiness, [{
    key: "satrt",
    value: function satrt() {
      console.log("We have a business. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(this.money, ". And our employers: ").concat(this.employers, "\nAnd we have a sponsors: \n").concat(this.sponsors, "\nNote. Be careful with ").concat(_sponsors.sponsors.eu[0], ". It's a huge risk."));
    }
  }]);

  return MakeBusiness;
}();

var makeBusiness = new MakeBusiness("Sam", undefined, startBusiness.sumSponsors(), emp.employersNames(), startBusiness.calcCash());
makeBusiness.satrt();