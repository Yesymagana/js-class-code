// Day 3 - Take-Home Challenge

// Ask for the user's first name
const firstName = prompt('What is your first name?'); // by putting this into a variable, you're 'storing' the data

// Ask for the user's last name
const lastName = prompt('What is your last name?');

// Log the user's first name to the console
console.log(firstName);

// Alert the user's last name
alert('Your last name is ' + lastName);

// *BONUS* 
// Ask for the user's birthday
const birthday = prompt('When is your birthday?');

// Ask the user to confirm their birthday input
const isConfirmed = confirm(birthday + ' is your birthday?');

// Alert the user's birthday
alert('We will sing Happy Birthday to you on ' + birthday + ' ' + firstName + '!');