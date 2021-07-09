"use strict";
var calcSum = function (a, b) {
    if (a === void 0) { a = 10; }
    if (b === void 0) { b = 20 * a; }
    console.log(a + b);
    console.log(arguments.length);
};
calcSum();
calcSum(12);
calcSum(10, 20);
//# sourceMappingURL=defaultParameters.js.map