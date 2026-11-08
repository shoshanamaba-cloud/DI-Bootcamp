let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

let guestName = prompt("What is your name?")

if (guestName in guestList){
    console.log(`Hi! I'm ${guestName} and I'm from ${guestList[guestName]}`);
}
        else {
            console.log (`Hi! I'm a guest.`);
        }