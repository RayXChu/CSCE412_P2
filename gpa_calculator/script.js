function calculateGPA() {
    const grades = document.querySelectorAll(".grade");
    const credits = document.querySelectorAll(".credits");

    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < grades.length; i++) {
        const gradeValue = parseFloat(grades[i].value);
        const creditValue = parseFloat(credits[i].value);

        if (!isNaN(creditValue) && creditValue > 0) {
            totalPoints += gradeValue * creditValue;
            totalCredits += creditValue;
        }
    }

    if (totalCredits === 0) {
        document.getElementById("result").textContent =
            "GPA: Please enter credit hours.";
        return;
    }

    const gpa = totalPoints / totalCredits;

    document.getElementById("result").textContent =
        "GPA: " + gpa.toFixed(4);
}