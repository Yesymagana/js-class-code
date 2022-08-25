// Day 4 - Daily Challenge

// Prompt the user for two different numbers
const userNumber1 = prompt('Please input a number', '50');
const userNumber2 = prompt('Please input a different number', '100');

console.log(userNumber1, userNumber2);

// Convert the values to integers
// Store the two integers as variables
const newNumber1 = parseInt(userNumber1);
const newNumber2 = parseInt(userNumber2);

console.log(newNumber1, newNumber2);

// Compare the two numbers
// Alert the larger number
if (newNumber1 > newNumber2) {
    alert('The bigger number is ' + newNumber1);
} else if (newNumber1 === newNumber2) {
    alert('INVALID! Please input two different numbers.')
} else {
    alert('The bigger number is ' + newNumber2);
}


// Day 4 - Take-Home Challenge

// Add an edge case to your daily challenge code


// Check if the user input anything other than a number


// If so, prompt the user again to input a number