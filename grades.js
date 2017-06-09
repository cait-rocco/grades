var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var scoreF = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
var scoreD = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
var scoreC = [71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
var scoreB = [81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
var scoreA = [91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

function gradeCount(scoreCat, grade) {
	var count = 0;
	for (var i = 0; i < scores.length; i++) {
		for (var b = 0; b < scoreCat.length; b++) {
			if (scores[i] === scoreCat[b]) {
				count++
			}
		}
	}
	console.log("Number of " + grade + " scores: ", count);
}

gradeCount(scoreA, "A");
gradeCount(scoreB, "B");
gradeCount(scoreC, "C");
gradeCount(scoreD, "D");
gradeCount(scoreF, "F");

console.log("The lowest grade is: ", Math.min.apply(null, scores));
console.log("The highest grade is: ", Math.max.apply(null, scores));




