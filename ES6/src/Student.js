import { Person } from "./Person.js";

export class Student extends Person {
    constructor(name, age, scores = []) {
        super(name, age);
        this.scores = scores;
    }

    calculateAverage() {
        if (this.scores.length === 0) {
            return 0;
        }

        const total = this.scores.reduce(
            (sum, score) => sum + score,
            0
        );

        return total / this.scores.length;
    }

    displayInfo() {
        return `
Name: ${this.name}
Age: ${this.age}
Scores: ${this.scores.join(", ")}
Average: ${this.calculateAverage().toFixed(2)}
        `;
    }
}
