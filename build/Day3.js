"use strict";
//Enum,type,interface & union
//1.Enum--string / number 
var operations;
(function (operations) {
    operations[operations["design"] = 0] = "design";
    operations[operations["production"] = 1] = "production";
    operations[operations["quality"] = 2] = "quality";
    operations[operations["packaging"] = 3] = "packaging";
    operations[operations["dispatched"] = 4] = "dispatched";
})(operations || (operations = {}));
if (operations.design) {
    console.log('to make a design');
}
//Number
var days;
(function (days) {
    days[days["day1"] = 0] = "day1";
    days[days["day2"] = 1] = "day2";
    days[days["day3"] = 2] = "day3";
})(days || (days = {}));
console.log(days.day1);
//STRING
var days2;
(function (days2) {
    days2["day1"] = "DAY1";
    days2["day2"] = "DAY2";
})(days2 || (days2 = {}));
console.log(days2.day1);
