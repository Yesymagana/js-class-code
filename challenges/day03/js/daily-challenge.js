// Day 3 - Daily Challenge

// CHALLENGE 1
// Prompt the user for their first name
// Store their input to a variable
let userName = prompt('What is your first name?');
console.log(userName);

// Reverse your user’s name
// alert the reversed string

let reverseName = userName.split('').reverse().join('');
console.log(reverseName);
alert('Your name is now reversed to: ' + reverseName);


// Challenge 2
// Prompt for a number value (provide a default of 10)
let numValue = prompt('Input a new number', '10');
console.log(numValue);

// Prompt for a second number value (provide a default of 10)
let numValue2 = prompt('Input a second number', '10');
console.log(numValue2);

// Convert the prompted values into integers using parseInt()
let newNumValue = parseInt(numValue);
let newNumValue2 = parseInt(numValue2);
console.log(newNumValue, newNumValue2);

// Add the numbers together and alert the user with the result
let total = (newNumValue += newNumValue2);
console.log(total);
alert('Your new total is ' + total);