// variables

const firstName = 'Yesenia';
let score = 0;

// var / let / const

const backticks = `backticks`;

// data types
const strings = 'single' || "double" || `${backticks}` || ``;
const numbers = 1 || 2.7 || -3.2 || 0;
const booleans = true || false;


// complex data types:

// array
const arrays = [1, 2, 3]; 

const carMakes = [
    'ford',
    'honda',
    'toyota',
    'chevy',
    'dodge',
    'jeep',
    'mazda',
    'nissan',
    'subaru',
    'audi',
];

// object
const object1 = { 
    name: 'Vinson',
    age: 25,
    species: 'human',
    media: []
};

const objects = {
    firstName: 'Frodo',
    lastName: 'Baggins',
    age: 32,
    species: 'Hobbit',
    media: [
        'The Lord of the Rings',
        'The Silmarillion',
        'The Two Towers',
        'The Return of the King'

    ],
};

const hobbits = [
    {firstName: 'Frodo', lastName: 'Baggins', age: 32, species: 'Hobbit'},
    {firstName: 'Samwise', lastName: 'Gamgee', age: 33, species: 'Hobbit'},
    {firstName: 'Meriadoc', lastName: 'Brandybuck', age: 29, species: 'Hobbit'},
    {firstName: 'Peregrin', lastName: 'Took', age: 30, species: 'Hobbit'},
    {firstName: 'Aragorn', lastName: 'Boromir', age: 37, species: 'Hobbit'},
    {firstName: 'Boromir', lastName: 'Boromir', age: 37, species: 'Hobbit'},
    {firstName: 'Legolas', lastName: '', age: 37, species: 'Hobbit'},
    {firstName: 'Gimli', lastName: '', age: 37, species: 'Hobbit'},
];


const fullName = hobbits[0].firstName + ' ' + hobbits[0].lastName; // returns --> Frodo Baggins

// console.log(
//    fullName.toUpperCase(), // makes it uppercase
//    fullName.toLowerCase(), // makes it lowercase
//    fullName.length, // returns the # of characters in the string
//    fullName.includes('Baggins'), // returns a boolean; checks to see whether it includes what's in the parenthesis
//    fullName.includes('Boromir'), // returns a boolean; checks to see whether it includes what's in the parenthesis
//    fullName.replace('Baggins', 'Boromir'), // replaces the first item ('Baggins') with the 2nd item in the parenthesis ('Boromir')
//    typeof fullName, // returns the data type (in this case, it's a string)
//    'Frodo'.toUpperCase(), // makes the specified portion uppercase
// );


// Constructors
console.log(
    Number('27'), // converts the string '27' into the NUMBER 27
    String(9),// converts the number 9 into the STRING '9'
    Boolean('hello world'), // converts the string into a boolean of true || false (this returns true since it's not an empty string)
    Array(21), // converts the number 21 into an array
    Object('test') // converts the string 'test' into an object of {'t', 'e', 's', 't'}
);

// Math
console.log(Math.max(100, 2, 3, 4, 5)); // finds the maximum
console.log(Math.min(100, 2, 3, 4, 5)); // finds the minimum
console.log(Math.round(2.1)); // rounds to the nearest integer
console.log(Math.ceil(2.1)); // rounds up to the nearest integer
console.log(Math.floor(2.9)); // rounds down to the nearest integer
console.log(Math.pow(10, 2)); // returns the value of x to the power of y (x(exponent y))
console.log(Math.sqrt(100)); // finds the square root
console.log(Math.PI); // finds the numerical value of pi (3.141592653589793)
console.log(Math.E); // returns Euler's number (2.718281828459045); this is the base of natural logarithms
console.log(Math.abs(-100)); // returns the absolute value of a number
console.log(Math.sign(-100)); // returns whether a number is negative, positive or zero
/* For Math.sign:
If the number is positive, it returns 1
If the number is negative, it returns -1
If the number is positive zero, it returns 0
If the number is negative zero, it returns -0
If the number is not a number, it returns NaN
*/

const date = new Date(); // current date
console.log(date);

const date2 = new Date('2000-01-01'); // specific date // TODO
const date3 = new Date(2000, 0, 1); // specific date --> year: 2000, month 0: January, day: 1 ==> January 1st, 2000
const date4 = new Date('1/01/2000'); // specific date --> 1/01/2000 ==> January 1st, 2000
console.log(date2, date3, date4);