const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let abreviatura = ""

for (const member of names) {
    abreviatura += member[0];
}

let sortedWord = abreviatura.split("").sort().join("")

console.log (sortedWord);