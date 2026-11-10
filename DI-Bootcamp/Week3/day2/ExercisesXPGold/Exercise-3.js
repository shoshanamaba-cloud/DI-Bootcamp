function swapCase(string) {
    let result = "";

    for (let letter of string) {
        if (letter === letter.toUpperCase()) {
            result += letter.toLowerCase();
        } else {
            result += letter.toUpperCase();
        }
    }

    return result;
}

console.log(swapCase("The Quick Brown Fox"));