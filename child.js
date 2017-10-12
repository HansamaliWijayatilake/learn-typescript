"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var inheritance_1 = require("./inheritance");
var teacher = (function (_super) {
    __extends(teacher, _super);
    function teacher(name) {
        return _super.call(this, name) || this;
    }
    teacher.prototype.walk = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("Walking...");
        _super.prototype.walk.call(this, distance);
    };
    teacher.prototype.teach = function (lang) {
        console.log("Teaching");
    };
    return teacher;
}(inheritance_1.human));
exports.teacher = teacher;
var swimmer = (function (_super) {
    __extends(swimmer, _super);
    function swimmer(name) {
        return _super.call(this, name) || this;
    }
    swimmer.prototype.swim = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("Swimming...");
        _super.prototype.swim.call(this, distance);
    };
    return swimmer;
}(inheritance_1.human));
exports.swimmer = swimmer;
