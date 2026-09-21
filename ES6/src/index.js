import { Student } from "./Student";

import {
    createScores,
    getStudentInfo,
    addScores,
    processScores,
    evaluateAcademicPerformance
} from "./scoreFunctions";

const scores = createScores(8, 9, 10, 7);

const student = new Student(
    "John",
    20,
    scores
);

console.log("===== PERSON INTRODUCTION =====");
console.log(student.introduce());

console.log("===== STUDENT INFORMATION =====");
console.log(student.displayInfo());

console.log("===== REST PARAMETER =====");
console.log(createScores(8, 9, 10));

console.log("===== DESTRUCTURING =====");
console.log(getStudentInfo(student));

console.log("===== SPREAD OPERATOR =====");
console.log(addScores(student, 10, 8));

console.log("===== ARRAY METHODS =====");

const result = processScores(student.scores);

console.log("Passing scores:", result.passingScores);
console.log("Bonus scores:", result.bonusScores);
console.log("Total score:", result.totalScore);
console.log("Average score:", result.averageScore.toFixed(2));

console.log("===== PROMISE =====");

evaluateAcademicPerformance(student)
    .then(result => {
        console.log("Academic evaluation:", result);
    });
