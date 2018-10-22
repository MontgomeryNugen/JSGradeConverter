function getLetterGrade() {

    var numGrade = document.getElementById("numericalGrade").value;
    var letterGrade = "X";

    if (numGrade >= 88) {
        letterGrade = "A";
    } else if (numGrade >= 80) {
        letterGrade = "B";
    } else if (numGrade >= 67) {
        letterGrade = "C";
    } else if (numGrade >= 60) {
        letterGrade = "D";
    } else if (numGrade < 60) {
        letterGrade = "F";
    }

    $("#letterGrade").val(letterGrade);
}



