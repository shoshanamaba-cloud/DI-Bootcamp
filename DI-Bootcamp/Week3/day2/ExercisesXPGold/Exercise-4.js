function isOmnipresent(arr, value) {

    for (let subarray of arr) {
        if (!subarray.includes(value)) {
            return false;
        }
    }

    return true;
}