// ARRAYS AND OBJECTS
let stringArr = ["one", "hey", "foo"];
let guitars = ["Start", "Les Paul", 5150];
let mixedData = ["EV", 1985, true];

stringArr[0] = "John";
//stringArr.push(42) // Error: Argument of type '42' is not assignable to parameter of type 'string'.

guitars[0] = 1984;
guitars.unshift("Jim");

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

// tuples
let myTuple: [string, number, boolean] = ["hey", 42, true];
let mixed = ["John", 1, false];

// Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Foo",
  prop2: true,
};

type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  // name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["Firm", "II"],
};

// evh = jp; // allowed. they are both the same type

// functions
const greetGuitarist = (guitarist: Guitarist) => {
  // return `Hello ${guitarist.name.toUpperCase()}!`; // Error: Object is possibly 'undefined'.
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`;
  }
  return "Hello!";
};

console.log(greetGuitarist(evh));
console.log(greetGuitarist(jp));

// enums
enum Grade {
  U,
  D,
  C,
  B,
  A = 6,
}
console.log(Grade.U);
console.log(Grade.A);
