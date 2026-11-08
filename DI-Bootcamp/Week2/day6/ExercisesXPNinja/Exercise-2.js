let gradesList = [70, 80, 60, 90];


function findAvg(gradesList) {
    let sum = 0;

    for (let i = 0; i < gradesList.length; i++) {
        sum += gradesList[i];
    }

    let average = sum / gradesList.length;
    console.log("Average:", average);
    return average;
}

let average = findAvg(gradesList);

if (average < 65) {
    console.log("You failed and must repeat the course");
} else {
    console.log("You passed!");
}