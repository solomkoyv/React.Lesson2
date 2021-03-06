"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmployersNames = exports.employers = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// компонент 1
var employers = ["Alex", "", "ludmila", "Viktor", "", "oleg", "iNna", "Ivan", "Alex", "Olga", " Ann"];
exports.employers = employers;

var EmployersNames =
/*#__PURE__*/
function () {
  function EmployersNames(employers) {
    _classCallCheck(this, EmployersNames);

    this.employers = employers.filter(function (name) {
      return name.length;
    }).map(function (name) {
      return name.toLowerCase().trim();
    });
  }

  _createClass(EmployersNames, [{
    key: "getEmployersNames",
    value: function getEmployersNames() {
      return this.employers;
    }
  }]);

  return EmployersNames;
}(); // const emp = new EmployersNames(employers);


exports.EmployersNames = EmployersNames;