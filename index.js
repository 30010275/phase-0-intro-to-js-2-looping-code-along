// Code your solution
function writeCards(names, event) {
    const messages = []; // an empty array
  
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  
    return messages; // Return the array
  }
function countDown(number) {
  while (number >= 0) {
    console.log(number); // Log the current number
    number--; // Decrement  number
  }
}
module.exports = { writeCards, countDown };

