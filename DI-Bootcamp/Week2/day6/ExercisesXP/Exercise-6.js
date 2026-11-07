const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

sentence =""

for (let x in details){
    sentence += x + " " + details[x] + " ";
}

console.log(sentence)