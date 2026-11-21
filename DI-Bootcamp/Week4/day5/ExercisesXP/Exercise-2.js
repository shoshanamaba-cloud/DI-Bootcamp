function displayStudentInfo(objUser){
    let {first, last}= objUser
    return `Your fullname is ${first} ${last}`
};

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));
