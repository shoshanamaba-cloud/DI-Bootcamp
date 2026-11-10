function uniqueElements(array) {
    let newArray = [];

    for (let element of array) {
        if (!newArray.includes(element)) {
            newArray.push(element);
        }
    }

    return newArray;
}

let list = [1, 2, 3, 3, 3, 3, 4, 5];

console.log(uniqueElements(list));