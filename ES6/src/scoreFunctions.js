export function createScores(...scores) {
    return scores;
}

export function getStudentInfo(student) {
    const { name, age } = student;

    return `Name: ${name}, Age: ${age}`;
}

export function addScores(student, ...newScores) {
    student.scores = [...student.scores, ...newScores];

    return student.scores;
}

export function processScores(scores) {
    const passingScores = scores.filter(score => score >= 5);

    const bonusScores = scores.map(score => score + 0.5);

    const totalScore = scores.reduce(
        (total, score) => total + score,
        0
    );

    const averageScore = totalScore / scores.length;

    return {
        passingScores,
        bonusScores,
        totalScore,
        averageScore
    };
}

export function evaluateAcademicPerformance(student) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const average = student.calculateAverage();

            if (average >= 8) {
                resolve("Excellent Student");
            } else {
                resolve("Need Improvement");
            }
        }, 1000);
    });
}
