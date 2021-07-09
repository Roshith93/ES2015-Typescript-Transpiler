"use strict";
var firstName = 'Tom';
var lastName = 'Jerry';
// object initial shorthand property
var newEmployee = {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};
// consice method
var conciseEmployee = {
    firstNames: 'tom',
    lastName: lastName,
    fullName: function () {
        return this.firstNames + ' ' + this.lastName;
    },
};
console.log(newEmployee.fullName());
console.log(conciseEmployee.fullName());
//# sourceMappingURL=objLiteral.js.map