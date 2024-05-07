"use strict";
// ARRAYS AND OBJECTS
let stringArr = ["one", "hey", "foo"];
let guitars = ["Start", "Les Paul", 5150];
let mixedData = ["EV", 1985, true];
stringArr[0] = "John";
//stringArr.push(42) // Error: Argument of type '42' is not assignable to parameter of type 'string'.
guitars[0] = 1984;
guitars.unshift("Jim");
let test = [];
let bands = [];
bands.push("Van Halen");
// tuples
let myTuple = ["hey", 42, true];
let mixed = ["John", 1, false];
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Foo",
    prop2: true,
};
let evh = {
    // name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["Firm", "II"],
};
// evh = jp; // allowed. they are both the same type
// functions
const greetGuitarist = (guitarist) => {
    // return `Hello ${guitarist.name.toUpperCase()}!`; // Error: Object is possibly 'undefined'.
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return "Hello!";
};
console.log(greetGuitarist(evh));
console.log(greetGuitarist(jp));
// enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 6] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
console.log(Grade.A);
