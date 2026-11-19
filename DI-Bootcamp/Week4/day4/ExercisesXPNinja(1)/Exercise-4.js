const letters = ['x', 'y', 'z', 'z'];

const result = {};

for (let letter of letters) {
    if (result[letter]) {
        result[letter]++;
    } else {
        result[letter] = 1;
    }
}

console.log(result);