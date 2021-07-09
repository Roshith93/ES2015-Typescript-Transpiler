"use strict";
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1);
    }, 1000);
};
//  this print 5, for 5 times
for (var i_1 = 0; i_1 < 5; i_1++) {
    _loop_1(i_1);
}
//  this print 0,1,2,3,4,
//# sourceMappingURL=let.js.map