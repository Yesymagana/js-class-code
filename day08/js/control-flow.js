// truthy
// falsey
0;
false;
'';
null;
undefined;
NaN;

// if (condition) {}

if (false) {
    console.log('condition is true');
}

if (true) {
    console.log('condition is true');
}

if (0) {
    console.log('condition is falsey');
}

if ('') {
    console.log('condition is falsey');
}

if (27 > 0) {
    console.log('condition is true');
}

// const firstName = prompt();
// if (firstName) {
//     console.log('you entered a name');
// } else {
//     console.log('you did not enter a name');
// }

if (27 < 0) {
    console.log('condition 1');
} else if (33 > 100) {
    console.log('condition 2');
} else {
    console.log('default condition');
}

// debugger; // allows you to step through the code and go line-by-line to find any potential errors

const answer = 'supervisor';

switch (answer) {
    case 'supervisor':
        console.log('answer is a');
        break; // breaks stop the code from running once the condition is met; is necessary 
    case 'manager':
        console.log('answer is b');
        break;
    case 'lead':
        console.log('answer is c');
        break;
    default:
        console.log('answer is not a, b, or c');
}

const firstNumber = parseInt(prompt('enter a number'));
const secondNumber = parseInt(prompt('enter another number'));
console.log(firstNumber + secondNumber);