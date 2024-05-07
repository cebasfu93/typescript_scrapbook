// ASSERTIONS OR TYPE CASTING
type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a: One = "hello"; // a is of type One
let b = a as Two; // b is of type Two

let c = a as Three; // c is of type Three

// this syntax is not compatible with React!
let d = <One>"world"; // d is of type One

const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(1, 2, "concat") as string;
// Be careful! TS sees no problem with this, but we know that a string is returned, not a number
let myVal2: number = addOrConcat(1, 2, "concat") as number;

// the DOM
const img = document.getElementById("#img") as HTMLImageElement;
img.src;
