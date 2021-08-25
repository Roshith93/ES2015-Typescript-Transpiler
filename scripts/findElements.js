"use strict";
function filteredArray(arr, elem) {
    var newArr = [];
    // Only change code below this line
    for (var i_1 = 0; i_1 < arr.length; i_1++) {
        if (arr[i_1].indexOf(elem) !== -1) {
            newArr.push(arr[i_1]);
        }
    }
    console.log(newArr);
    // Only change code above this line
    return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
//# sourceMappingURL=findElements.js.map