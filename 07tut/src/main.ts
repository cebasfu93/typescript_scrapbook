// INDEX SIGNATURES

// example 1
// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

// example 2
// interface TransactionObj {
//   [index: string]: number;
//   // readonly [index: string]: number; // visibility modifiers are also allowed
// }

// const todaysTransactions: TransactionObj = {
//   Pizza: -10,
//   Books: -5,
//   Job: 50,
// };

// console.log(todaysTransactions.Pizza);
// console.log(todaysTransactions["Pizza"]);

// let prop: string = "Pizza";
// console.log(todaysTransactions[prop]);

// const todaysNet = (transactions: TransactionObj): number => {
//   let total = 0;
//   for (const transaction in transactions) {
//     total += transactions[transaction];
//   }
//   return total;
// };

// console.log(todaysNet(todaysTransactions));

// console.log(todaysTransactions["Dave"]);

// example 3
// interface TransactionObj {
//   [index: string]: number;
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

// const todaysTransactions: TransactionObj = {
//   Pizza: -10,
//   Books: -5,
//   Job: 50,
//   // name: "Foo" // error because it is not a number
//   age: 13, // error because it is not a number
// };

// example 4
interface Student {
  [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 300],
};

console.log(student.test); // doesn't complain about test because it is an index signature even though we never defined test

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}
