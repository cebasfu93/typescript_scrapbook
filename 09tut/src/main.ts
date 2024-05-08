// UTILITY TYPES

// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "123",
  title: "Assignment 1",
  grade: 100,
};

const assignGraded = updateAssignment(assign1, { grade: 90 });
console.log(assignGraded);

// Required

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database, etc.
  return assign;
};

// Readonly
const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true };
// assignVerified.grade = 90; // Error // because it is of a readonly type

// Record

const hexColorMap: Record<string, string> = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";
const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "A",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 90 },
  Kelly: { assign1: 15, assign2: 50 },
};

// Pick
type AssignResult = Pick<Assignment, "studentId" | "grade">;
const score: AssignResult = { studentId: "123", grade: 90 };

// Omit
type AssignPreview = Omit<Assignment, "grade" | "verified">;
const preview: AssignPreview = { studentId: "123", title: "Assignment 1" };

// Exclude and Extract
type adjustedGrade = Exclude<LetterGrades, "U">;
type highGrades = Extract<LetterGrades, "A" | "B">;

// NonNullable
type AllPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;

// ReturnType

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};
type NewAssign = ReturnType<typeof createNewAssign>; // { title: string, points: number }

const tsAssign: NewAssign = createNewAssign("Utility types", 100);
console.log(tsAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>;
const assignArgs: AssignParams = ["Generics", 100];
const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

// type FetchUsersReturnType = ReturnType<typeof fetchUsers>;
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
