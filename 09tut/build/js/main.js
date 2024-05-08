"use strict";
// UTILITY TYPES
const updateAssignment = (assign, propsToUpdate) => {
    return { ...assign, ...propsToUpdate };
};
const assign1 = {
    studentId: "123",
    title: "Assignment 1",
    grade: 100,
};
const assignGraded = updateAssignment(assign1, { grade: 90 });
console.log(assignGraded);
// Required
const recordAssignment = (assign) => {
    // send to database, etc.
    return assign;
};
// Readonly
const assignVerified = { ...assignGraded, verified: true };
// assignVerified.grade = 90; // Error // because it is of a readonly type
// Record
const hexColorMap = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
};
const finalGrades = {
    Sara: "B",
    Kelly: "A",
};
const gradeData = {
    Sara: { assign1: 85, assign2: 90 },
    Kelly: { assign1: 15, assign2: 50 },
};
const score = { studentId: "123", grade: 90 };
const preview = { studentId: "123", title: "Assignment 1" };
// ReturnType
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
};
fetchUsers().then((users) => console.log(users));
