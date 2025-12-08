let marks = 85;
let grade;

switch (true) {
    case (marks >= 90):
        grade = "A";
        break;
    case (marks >= 75):
        grade = "B";
        break;
    case (marks >= 60):
        grade = "C";
        break;
    case (marks >= 40):
        grade = "D";
        break;
    default:
        grade = "Fail";
}

console.log("Grade:", grade);
