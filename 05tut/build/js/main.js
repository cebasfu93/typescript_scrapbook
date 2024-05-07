"use strict";
// convert to more or less specific
let a = "hello"; // a is of type One
let b = a; // b is of type Two
let c = a; // c is of type Three
// this syntax is not compatible with React!
let d = "world"; // d is of type One
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(1, 2, "concat");
// Be careful! TS sees no problem with this, but we know that a string is returned, not a number
let myVal2 = addOrConcat(1, 2, "concat");
// the DOM
const img = document.getElementById("#img");
img.src;
