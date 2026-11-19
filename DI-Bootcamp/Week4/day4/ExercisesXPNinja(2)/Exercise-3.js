function search_word(str, word) {
    let words = str.split(" ");

    let found = words.filter(item => item === word);

    return `'${word}' was found ${found.length} times.`;
}

console.log(search_word('The quick brown fox', 'fox'));