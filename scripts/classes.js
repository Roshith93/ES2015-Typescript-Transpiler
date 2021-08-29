"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        console.log(this.name);
    }
    Person.prototype.fullName = function () {
        return 'maim';
    };
    return Person;
}());
var Asian = /** @class */ (function (_super) {
    __extends(Asian, _super);
    function Asian(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Asian.prototype.fullName = function (x) {
        return "name from person from " + x;
    };
    return Asian;
}(Person));
var Indian = new Asian('I am an indian');
console.log(Indian.fullName('hello'));
var p = new Person('John');
var Employee = new Person('Starvy');
var Employees = /** @class */ (function (_super) {
    __extends(Employees, _super);
    function Employees(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        console.log(_this.name);
        return _this;
    }
    Employees.prototype.fullName = function () {
        return _super.prototype.fullName.call(this);
    };
    return Employees;
}(Person));
var trainee = new Employees('Jobbys ');
console.log(trainee.fullName());
//# sourceMappingURL=classes.js.map