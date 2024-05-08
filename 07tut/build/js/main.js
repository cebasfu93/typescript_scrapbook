"use strict";
// INDEX SIGNATURES
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 300],
};
console.log(student.test); // doesn't complain about test because it is an index signature even though we never defined test
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
