function hotelCost() {
    let numberOfNights = Number(prompt("How many nights would you like to stay?"));

    while (isNaN(numberOfNights) || numberOfNights <= 0) {
        numberOfNights = Number(prompt("Invalid answer. Please enter a number greater than 0"));
    }

    return numberOfNights * 140;
}

function planeRideCost() {
    let destination = prompt("Where would you like to travel?");

    while (destination === null || destination.trim() === "") {
        destination = prompt("Please enter a destination:");
    }

    if (destination.toLowerCase() === "london") {
        return 183;
    } else if (destination.toLowerCase() === "paris") {
        return 220;
    } else {
        return 300;
    }
}

function rentalCarCost() {
    let days = Number(prompt("How many days would you like to rent the car?"));

    while (isNaN(days) || days < 0) {
        days = Number(prompt("Invalid answer. Please enter a valid number of days:"));
    }

    let totalPrice = days * 40;

    if (days > 10) {
        totalPrice = totalPrice * 0.95;
    }

    return totalPrice;
}

function totalVacationCost() {
    let hotel = hotelCost();
    let plane = planeRideCost();
    let car = rentalCarCost();

    let total = hotel + plane + car;

    return total;
}

console.log(totalVacationCost());