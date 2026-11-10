function isPalindrome(string) {
    let reversed = "";

    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }

    if (string === reversed) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));