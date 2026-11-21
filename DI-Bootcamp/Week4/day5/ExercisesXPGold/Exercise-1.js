const printFullName = ({first, last} = {first: 'Elie', last: 'Schoppik'}) => {

    return `Your full name is ${first} ${last}`;

};

console.log(printFullName({first: 'Elie', last: 'Schoppik'}));