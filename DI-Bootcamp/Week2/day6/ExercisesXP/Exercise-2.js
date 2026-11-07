let colors = ["green", "pink", "yellow", "mint", "orange"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}


let suffixes = ["st","nd", "rd", "th", "th"];


for (let i = 0; i<colors.length; i++){
    console.log(`my ${i+1}${suffixes[i]} choice is ${colors[i]}`);
}