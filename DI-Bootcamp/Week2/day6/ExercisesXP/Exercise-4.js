const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log(`The number of apartments on floor 1 is ${building.numberOfAptByFloor.firstFloor}, and on floor 3 it's ${building.numberOfAptByFloor.thirdFloor}.`);
console.log(`The second tenant is ${building.nameOfTenants[1]}, and his apartment has ${building.numberOfRoomsAndRent.dan[0]} rooms.`);

const sarahAndDavidRent = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahAndDavidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log(building.numberOfRoomsAndRent.dan [1])