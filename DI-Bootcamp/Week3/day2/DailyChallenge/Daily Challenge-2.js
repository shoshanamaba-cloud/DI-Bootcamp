let answer = prompt("Enter several words separated by commas:");

let words = answer.split(",").map(word => word.trim());

let longestWord = 0;

for (let word of words) {
    if (word.length > longestWord) {
        longestWord = word.length;
    }
}

let border = "*".repeat(longestWord + 4);

console.log(border);

for (let word of words) {
    console.log("* " + word + " ".repeat(longestWord - word.length) + " *");
}

console.log(border);