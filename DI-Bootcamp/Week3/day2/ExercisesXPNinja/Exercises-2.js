function capitalize(string) {
    let even = "";
    let odd = "";

    for (let i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            even += string[i].toUpperCase();
            odd += string[i];
        } else {
            even += string[i];
            odd += string[i].toUpperCase();
        }
    }

    return [even, odd];
}

console.log(capitalize("abcdef"));