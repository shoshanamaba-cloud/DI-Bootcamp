function repeat(string, n = 1) {
    let result = "";

    for (let i = 0; i < n; i++) {
        result += string;
    }

    return result;
}

console.log(repeat("Ha!", 3));