"use strict";
function largestOfFour(arr) {
    var temp = [];
    for (var i_1 = 0; i_1 < arr.length; i_1++) {
        var largestNum = Math.max.apply(Math, arr[i_1]);
        temp[i_1] = largestNum;
    }
    arr.splice(0);
    arr.push.apply(arr, temp);
    return arr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//# sourceMappingURL=findLargest.js.map