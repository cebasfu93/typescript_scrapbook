"use strict";
// interface PostId = stringOrNumber; // not allowed. Interface can't be used for type alias
// Literal type
let myName;
let userName;
// userName = "bla" // error
userName = "Amy";
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello");
logMsg(add(2, 3));
// logMsg(add("2", 3)); // error
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = function (a, b) {
    return a * b;
};
// OPTIONAL PARAMETERS
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3));
logMsg(addAll(2, 3, 2));
logMsg(sumAll(2, 3));
logMsg(sumAll(2, 3, undefined));
// REST PARAMETERS
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
const totalB = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
const infinite = () => {
    // never returns a value
    let i = 1;
    while (true) {
        i++;
    }
};
const createError = (message) => {
    throw new Error(message);
};
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
    return createError("Invalid type");
};
