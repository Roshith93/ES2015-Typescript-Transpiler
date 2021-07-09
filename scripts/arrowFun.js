"use strict";
var employee = {
    firstName: 'Tom',
    lastName: 'Jerry',
    fullName: function () {
        var _this = this;
        setTimeout(function () {
            return _this.firstName + " " + _this.fullName;
        }, 100);
    },
};
console.log(employee.fullName);
//# sourceMappingURL=arrowFun.js.map