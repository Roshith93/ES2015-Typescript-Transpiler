"use strict";
function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) !== -1) {
        return true;
    }
    else {
        return false;
    }
    // Only change code above this line 
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
console.log(quickCheck(["onions", "squash", "shallots"], "onions"));
console.log(quickCheck(["onions", "squash", "shallots"], undefined));
//# sourceMappingURL=indexof.js.map