function biggestNumberInArray(arrayNumber) {
    if (arrayNumber.length === 0) {
        return 0;
    }

    let biggest = arrayNumber[0];

    for (let number of arrayNumber) {
        if (typeof number === "number" && number > biggest) {
            biggest = number;
        }
    }

    return biggest;
}
