"use strict";
exports.__esModule = true;
var human = (function () {
    function human(name) {
        this.name = name;
    }
    human.prototype.walk = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log(this.name + " walked " + distance + " m !");
    };
    human.prototype.swim = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " swam " + distance + " m !");
    };
    return human;
}());
exports.human = human;
