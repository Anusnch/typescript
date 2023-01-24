"use strict";
//Assigne data type 
//String,number,boolean,array,touple,Enum,object
//1.String
let firstName;
firstName = "Anita";
//2.Number
let rollnumber;
rollnumber = 50;
//----
let studentID = 10;
//3.Boolean
let Icandrive;
Icandrive = true;
//4.array
let names = [];
names.push('Anita');
names.push('sanchit');
console.log(names);
//Loop
names.forEach(function (el) {
    console.log(el.length);
});
//5.Touple
//touple define a length and datatype at a same time
let rollNo;
rollNo = [10, 20, 30];
//or by defult extra (more than define length) data added in the array--by using push method only.
rollNo.push(1);
rollNo.push(2);
console.log(rollNo);
//Enum--to store more relative data to used Enum
var data;
(function (data) {
    data[data["manager"] = 0] = "manager";
    data[data["Hr"] = 1] = "Hr";
    data[data["finance"] = 2] = "finance";
    data[data["coordinator"] = 3] = "coordinator";
    data[data["designer"] = 4] = "designer";
})(data || (data = {}));
if (data.coordinator) {
    console.log('co-ordinate to every one');
}
//object
let person = {
    firstName: "Anita",
    lastName: "Pagar",
    age: 24
};
let data2;
