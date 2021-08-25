"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var initialValues = [0, false, 'ABC'];
var count = initialValues[0], isOpen = initialValues[1], _a = initialValues[2], value = _a === void 0 ? 'Cat' : _a;
console.log(count, isOpen, value);
var source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    // Only change code below this line
    var a = list[0], c = list[1], arr1 = list.slice(2); // Change this line
    // Only change code above this line
    console.log(arr1);
    return arr1;
}
var arr1 = removeFirstTwo(source);
console.log(arr1);
var stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85,
};
// Only change code below this line
// const half = ({ stats: ({ max: string , min }) }) => {
//   // const { max, min } = stats
//   console.log((max + min) / 2.0)
// }
// half(stats)
var result = {
    success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
    failure: ['no-var', 'var-on-top', 'linebreak'],
    skipped: ['no-extra-semi', 'no-dup-keys'],
};
function makeList(arr) {
    // Only change code below this linelu => ele
    var listArr = arr.map(function (el) {
        return "<li class=\"text-warning\">" + el + "</li>,";
    });
    console.log(listArr);
    var failureItems = __spreadArray([], listArr);
    // Only change code above this line
    return failureItems;
}
var failuresList = makeList(result.failure);
console.log(failuresList);
//# sourceMappingURL=destructuring.js.map