const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, i) => {
    let ending = (i + 1 <= 3) ? ordinal[i + 1] : ordinal[0];

    console.log(`${i + 1}${ending} choice is ${color}.`);
});