function keysAndValues(obj) {
    const keys = Object.keys(obj).sort();

    const values = keys.map(key => obj[key]);

    return [keys, values];
}

console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));