"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sponsors = exports.sponsors = void 0;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//  компонент 2
var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ["SRL", "PLO", "J&K"],
  rus: ["RusAuto", "SBO"]
};
exports.sponsors = sponsors;

var Sponsors =
/*#__PURE__*/
function () {
  function Sponsors(_ref) {
    var cash = _ref.cash,
        eu = _ref.eu,
        rus = _ref.rus;

    _classCallCheck(this, Sponsors);

    this.cash = cash;
    this.eu = eu;
    this.rus = rus;
  }

  _createClass(Sponsors, [{
    key: "calcCash",
    value: function calcCash() {
      return this.cash.reduce(function (res, x) {
        return res + x;
      }, 0);
    }
  }, {
    key: "sumSponsors",
    value: function sumSponsors() {
      return [].concat(_toConsumableArray(this.eu), _toConsumableArray(this.rus), ["unexpected sponsor"]);
    }
  }]);

  return Sponsors;
}(); // const startBusiness = new Sponsors(sponsors);


exports.Sponsors = Sponsors;