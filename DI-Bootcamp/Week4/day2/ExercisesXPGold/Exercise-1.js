const landscape = () => {
    let result = "";

    const flat = (x) => {
        for (let count = 0; count < x; count++) {
            result += "_";
        }
    };

    const mountain = (x) => {
        result += "/";
        for (let counter = 0; counter < x; counter++) {
            result += "'";
        }
        result += "\\";
    };

    flat(4);
    mountain(4);
    flat(4);

    return result;
};

console.log(landscape());

/* this is going to generate the look of an horizon and the effect of a mountain in a single line console.log ____/''''\____ */
