// TYPE ALIASES
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

type UserId = stringOrNumber;
// interface PostId = stringOrNumber; // not allowed. Interface can't be used for type alias

// Literal type
let myName: "foo";
let userName: "Dave" | "John" | "Amy";
// userName = "bla" // error
userName = "Amy";

// Functions
const add = (a: number, b: number) => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello");
logMsg(add(2, 3));
// logMsg(add("2", 3)); // error

let subtract = function (c: number, d: number): number {
  return c - d;
};

// define a function schema either with a type alias or an interface
// Dave prefers type aliases for functions
type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply: mathFunction = function (a, b) {
  return a * b;
};

// OPTIONAL PARAMETERS
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3));
logMsg(addAll(2, 3, 2));
logMsg(sumAll(2, 3));
logMsg(sumAll(2, 3, undefined));

// REST PARAMETERS
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};
const totalB = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4));

const infinite = (): never => {
  // never returns a value
  let i: number = 1;
  while (true) {
    i++;
  }
};

const createError = (message: string): never => {
  throw new Error(message);
};
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return createError("Invalid type");
};
