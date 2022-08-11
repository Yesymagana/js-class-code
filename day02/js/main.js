
firstName = 'John';
score = 100;
isPresent = true;

user1 = {
    firstName: 'John',
    score: 100,
    isPresent: true
}

user2 = {
    firstName: 'Joe',
    score: 90,
    isPresent: false
}

users = [user1, user2];

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
tens = [10, 20, 30, 40, 50, 60, 70, 80, 90];
hundreds = [100, 200, 300, 400, 500, 600, 700, 800, 900];

selectedUser = 0;
selectedItem = 'score';

console.log(users);

// bracket notation vs dot notation = the same performance-wise

// access by bracket notation
console.log(users[1]); // selects the 2nd user (**first number is always zero)

// access by dot notation
console.log(users[0].firstName); // selects 1st user's first name
console.log(users[1].score); // selects 2nd user's score

// access by both bracket notation
console.log(users[0]['firstName']); // can also call the information by string name
console.log(users[1]['score']);


// VARIABLE TYPES: var vs const vs let

// var = obsolete variable type. Do not use
// const = constant. Const variables cannot be changed
// let = CAN be changed further down the document

text0 = 0;

const test = 1;
let test2 = 2;
var test3 = 3;

// let test2 = 3; ('let' lets you change the value but you cannot declare it again, this causes an error)

test2 = 4;
console.log(test2);

// declare a variable and assign a value and then reassign the value

constVariable = {
    declare: true,
    redeclare: false,
    assign: true,
    reassign: false,
}

const myConst = true; // can only declare & assign it once

letVariable = {
    declare: true,
    redeclare: false,
    assign: true,
    reassign: true,
}

let myLet = true;
myLet = false; // can only declare it once but CAN reassign the value

varVariable = {
    declare: true,
    redeclare: true,
    assign: true,
    reassign: true,
}

var myVar = true;
myVar = false;
var myVar = false; // no limitations with a Var, can re-declare & re-assign


whatIsThis = true; // if you don't declare it, it'll default to a Var. DON'T do this, not best practice.


// OPERATORS

// Arithmetic Operators
// + - * / %
console.log('operators');
console.log(1 + 1); // 2 -- addition
console.log(10 - 1); // 9 -- subtraction
console.log(10 * 2); // 20 -- multiplication
console.log(10 / 2); // 5 -- division
console.log(10 % 2); // 0 -- modulo (remainder)

// Assignment Operators
// = += -= *= /+ %=
console.log('assignment operators');
let x = 10;
console.log(x); // 10
console.log(2 + x); // 12
console.log(x); // 10

x += 2; // 12
x =+ 2; // 14
console.log(x); // 14

x /= 2; // 7
console.log(x); // 7

x %= 2; // 
console.log(x); // 

// Comparison Operators
// == != === !== > < >= <=
// ALWAYS returns a Boolean

console.log(20 == 20); // true
console.log(20 == '20'); // true, == both equal 20
console.log(20 != 20); // false
console.log(20 === 20); // true
console.log(20 !== 20); // false
console.log(20 === '20'); // false, === must be identical in both value and data type. 20 does not equal '20'


// Strings
let string1 = 'Hello';
let string2 = "World";
// let string3 = `${string1} ${string2} ${10 * 10}`; 
// this is known as a template literal (using a tilde and ${}, can combine different variables this way)
let string3 = `

${string1} 

${string2} 

${10 * 10}

`; // the 'special power' here is the ability to format your data as you'd like without needing to use '+' or other individual elements
console.log(string3);

// concatenation example listed below. it'd be using '+' within your strings

let string4 = 'hello ' + 'world';
console.log(string4);



// Numbers

// Integers & Decimals (both positive and negative values)
let number1 = 0;
let number2 = 1.27;
let number3 = -1.27;

// Infinity is also a number that can be used. Always greater than all other numbers.
console.log(200207 * 100_000_000 > Infinity);

// NaN = Not a Number
console.log(7 * {name: 'Joe'}); // = NaN

// BitInt -- this is used for truly LARGE numbers. Used for integers of longer length than the number data type. Created by adding an "n" to the end of an integer.
let myBigInt = BigInt(7);
console.log(10n * 100_000_000_000n);


// Symbol = creates anonymous and unique values
console.log('hello' === 'hello');
let mySymbol = Symbol('mySymbol');
let mySymbol2 = Symbol('mySymbol');

console.log(mySymbol === mySymbol2); // = false

console.log(typeof ''); // = string
console.log(typeof 1); // = number
console.log(typeof true); // = boolean

console.log(typeof mySymbol); // symbol
console.log(typeof myBigInt); // bigint




// create an element and append it to the body
const h1 = document.createElement('h1');
const ul = document.createElement('ul');
const li = document.createElement('li');

// change text content of the h1 element
h1.innerHTML = user1.firstName;
li.innerHTML = 'Hello World';

// append the h1 element to the body
document.body.append(h1);
document.body.append(ul);
ul.append(li);

// remove the h1 element from the body
// h1.remove();

// retrieve elements from the document
const p = document.querySelector('p');

// interact with element styles
p.classList.add('red');
p.style.color = 'red';
