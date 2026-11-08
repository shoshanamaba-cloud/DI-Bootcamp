const person1 = {
    fullName: "Rivka",
    height: 1.62,
    mass: 80,

    calculateBMI: function() {
        return this.mass / this.height ** 2;
    }
};

const person2 = {
    fullName: "Chaim",
    height: 1.74,
    mass: 85,

    calculateBMI: function() {
        return this.mass / this.height ** 2;
    }
};

function compareBMIs(person1, person2){
    if (person1.calculateBMI() > person2.calculateBMI()){
       console.log (`${person1.fullName} has the largest BMI`); 
    } else if (person2.calculateBMI() > person1.calculateBMI()){
       console.log (`${person2.fullName} has the largest BMI`);
    } else {
        (console.log(`Both have the same BMI`));
    }
}

compareBMIs(person1, person2);