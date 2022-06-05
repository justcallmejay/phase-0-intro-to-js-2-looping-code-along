function writeCards(name, greetings) {
    let thanks = [];

    for (let i = 0; i < name.length; i++) {
      thanks.push(`Thank you, ${name[i]}, for the wonderful ${greetings} gift!`);
      
    }
  
    return thanks;

}   
  

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

function countDown(number) {
  let i = -1;
  while (i < number) {
    console.log(number--);
  }

}

console.log(countDown(10))