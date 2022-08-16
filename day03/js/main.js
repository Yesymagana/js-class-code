function add(a, b) {
    console.log(a + b);
    return a + b;
}

function lotsOfWork(x) {
    console.log(x += 1); 
    console.log(x -= 1); 
    console.log(x *= 10); 
    console.log(x /= 2);
    console.log(x);
    return x;
}

// usage of functions
// manipulation of variables
// input output

// reasons to use functions:
// modularity / reusability!! (#1 reason)
// abstraction
// clarity
// use later / repeat later

add(1, 2);
add(5, 2);
let myAnswer = lotsOfWork(10); // the variable myAnswer will now equal this function's answer
myAnswer = lotsOfWork(20);

// Methods
// Methods === functions that are attached to objects

// string methods
let firstName = '    who is John?    '.trim(); // .trim() 'trims' out any unnecessary characters (all the empty spaces) so that it's easier to read & manipulate the data as needed
console.log(firstName.toUpperCase()); // makes the answer be in all-caps --> (WHO IS JOHN?)
console.log(firstName.toLowerCase()); // makes the answer be in all lower-case --> (who is john?)
console.log(firstName.length); // returns the number of letters in the string --> (12)
console.log(firstName.indexOf('n')); // returns the index number of the letter specified within the string. 'N' was the 10th index number within the string
console.log(firstName.endsWith('?')); // sees if the string ends with the character specified. In this case it = true
console.log(firstName.includes('n')); // checks to see if the string includes the specified character and returns true/false. In this case it = true
console.log(firstName.replace("J", "j")); // replaces the character specified (in this case 'J'), with the 2nd letter specified ('j')
console.log(firstName.slice(0, -1)); // 'slices'/extracts a part of the string & returns the extracted part in a new string; does not change the original string. A NEGATIVE number selects from the end of the string (in this example, it removes the '?' and extracts the remaining part of the string 'Who is John'). A 2nd example without a negative would be as follows: console.log(firstName.slice(0, 1)); ==> 'w' (it extracts the string located between the 0 index position and before the 1 index position -- in this case the only character is 'w')
console.log(firstName.substring(0, 2)); // extracts characters between two indices from a string & returns the substring; does not change the original string. In this example the answer ==> 'wh' (string characters between indices 0 and before 2)
console.log(firstName.substr(0, 5)); // this is a legacy/deprecated feature so try to avoid using. Gets a substring beginning at the specified location and having the specified length. Answer ==> 'who i' (starts at 0 index position and contains a length of 5 string characters)
console.log(firstName.split("")); // splits a string into an array of substrings & returns a new array; does not change the original string. This example splits the string after every single character; the answer ==> (12) ['w', 'h', 'o', ' ', 'i', 's', ' ', 'J', 'o', 'h', 'n', '?']
console.log(firstName.split(" ")); // If (" ") is used as the separator, the string is split between words (we specify the split between all empty spaces). This example's answer ==> (3) ['who', 'is', 'John?']
console.log(firstName.trim()); // removes whitespace from both sides of a string; does not change the original string. Seen up above appended to the original string example
console.log(firstName.trim().split(" ")); // removes unnecessary whitespace AND then splits the string between words (as seen in the example on line 46). 

// Pop-up Methods -- in the 'real world' these aren't used often. It's best to use html/forms in order to interact with the user & get the information you need.

// Reason to use: alert --> tells the user something. Does NOT return anything.
//let alertAnswer = alert('You have mail'); // statement

// Reason to use: confirm --> asks the user for input. Returns a Boolean (true/false)
//let confirmAnswer = confirm('You have unsaved work. Are you sure you want to exit without saving?'); // can either press ok OR cancel.

// Reason to use: prompt --> asks the user for input. Returns a string.
//let promptAnswer = prompt('What is your name?'); // input

//console.log(alertAnswer, confirmAnswer, promptAnswer); // answer shown on the console would be: undefined true||false 'name'

// Math properties
Math.floor(9.9); // rounds a number DOWN to the nearest integer (answer here ==> 9)
Math.ceil(9.1); // rounds a number UP to the nearest integer (answer here ==> 10)
Math.round(9.5); // rounds a number to the nearest integer (answer here ==> 10)
console.log(Math.random()); // returns a random number from 0 (inclusive) up to but not including 1 (exclusive)
// Math.random -- will always generate a number between 0 and whatever number you multiply it by (EX: Math.random * 3 = randomized numbers between 0 but never 3, Math.random * 10 = randomized numbers between 0 but never 10)

Math.pow(2, 3); // returns the value of x to the power of y (x(exponent y)) (answer here ==> 8)
Math.sqrt(9); // returns the square root of a number (answer here ==> 3)
Math.abs(-9); // returns the absolute value of a number (answer here ==> 9)
Math.max(1, 2, 3, 4, 5); // returns the number with the highest value (answer here ==> 5)
Math.min(1, 2, 3, 4, 5); // returns the number with the lowest value (answer here ==> 1)


const students = [
    'student1', // index # = 0
    'student2', // index # = 1
    'student3', // index # = 2
    'student4', // index # = 3
    'student5', // index # = 4
    'student6', // index # = 5
    'student7', // index # = 6
    'student8', // index # = 7
    'student9', // index # = 8
    'student10', // index # = 9
];

console.log(students[0]); // result = student1

const randomDecimal = Math.random();
const decimalMultipliedByStudentsLength = randomDecimal * students.length;
const floored = Math.floor(decimalMultipliedByStudentsLength);
console.log(floored); // randomizes the index number (console shows the index # selected)
console.log(students[floored]); // randomizes which student is picked from the 'students' array (console shows the actual string selected)


// Date objects
const date = new Date();

console.log(date); // gives you today's full date, day of the week, time, & time zone
console.log(date.getFullYear()); // gives you full year
console.log(date.getMonth()); // gives you the month # -- the options are 0-11 since the first index equals 0 ==> (August = index number 7)
console.log(date.getDate()); // gives you the date number (ex: 8/15/2022 = results in # 15)
console.log(date.getDay()); // gives you the day # in regards to Sunday (0) - Saturday (7) ==> (Monday = number 1)
console.log(date.getHours()); // returns the hour (0 to 23) of a date
console.log(date.getMinutes()); // returns the minutes (0 to 59) of a date
console.log(date.getSeconds()); // returns the seconds (0 to 59) of a date
console.log(date.getMilliseconds()); // returns the milliseconds (0 to 999) of a date
console.log(date.getTime()); // returns the number of milliseconds since January 1, 1970 00:00:00
console.log(date.getTimezoneOffset()); // returns the difference between UTC time and local time (returns the difference in minutes)
// for .getTimezoneOffset --> The value is not constant because of varying Daylight Saving Time. The Universal Time Coordinated (UTC) is the time set by the World Time Standard. UTC time is the same as GMT (Greenwich Mean Time).

const date2 = new Date('8/14/2022');
console.log(date2.getDay()); // results # 0 since Sunday = 0 index

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] // 'NONEday', 'ONEday', 'TWOSday', 'THREESday, 'THORSday/FOURSday', 'FIVESday', 'SIXday'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

date.setMonth(date.getMonth() - 2000);
console.log(date); // answer in console = Saturday Dec 15 1855 + time + PST Timezone; computer 'traveled back in time' 2000 months


console.log(new Date().getHours());
/* 
new Date().getHours() -- it's currently 8pm, in 24hr time its 20 hours
20 (answer was --> 20)

new Date().getHours() % 12 -- use modulo to convert it to our 'normal time'. 12 goes into 20 and leaves a remainder of 8 -> it's 8pm
8 (answer was --> 8)
*/


function randomItem(array) {
    const decimal = Math.random();
    const decimalMultiplyByArrayLength = decimal * array.length;
    const floored = Math.floor(decimalMultiplyByArrayLength);
    return array[floored];
}

// this function randomly selects answers from the following arrays: days, months, students
console.log(randomItem(days));
console.log(randomItem(months));
console.log(randomItem(students));


// Number groups of 10:

// 0 - 9 (10 digits)
// day0
// day1
// day2
// day3
// day4
// day5
// day6
// day7
// day8
// day9

// 10 - 19 (10 digits)
// day10
// day11
// day12
// day13
// day14
// day15
// day16
// day17
// day18
// day19

// 20 - 29 (10 digits)
// day20
// day21
// day22
// day23
// day24
// day25
// day26
// day27
// day28
// day29

// etc.