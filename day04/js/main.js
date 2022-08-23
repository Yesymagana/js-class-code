// VS Code Extension -- Github Copilot. Uses AI to help predict & autofill your code
// https://beta.openai.com/codex-javascript-sandbox -- another AI to help with code


if ( 5 > 7 ) {
    console.log('first test');
} else if ( 5 < 7 ) {
    console.log('backup test1'); // this is the response in the console since 5 < 7
} else if ('') {
    console.log('backup test2');
} else if (false) {
    console.log('backup test3');
} else {
    console.log('else'); // would have continued to test against all and would not console.log until it found the appropriate response; if none of the rest work, it'll default to the last 'else' response
};



// Falsey values:

// no value (false) is falsey -- this is a boolean
// 0 is falsey -- this is a number
// '' is falsey -- this is a string
// null is falsey -- this is an object that's undefined
// undefined is falsey -- this is an object that's undefined
// NaN is falsey -- returns when it's 'Not a Number'

// everything else is truthy



// debugger; // this 'pauses' the page and allows you to review line by line until you find any potential errors; look at the "sources" tab next to the "console"


const date = new Date(); // sets it to the current date
const h1 = document.querySelector('h1'); // looks for the h1 in the html body & uses it 
date.setHours(12); // manually sets the computer's time to be 12 o'clock

if (date.getHours() > 20) { // if it's later than 8pm then run the below:
    h1.textContent = 'Too Late!'; // h1 text displayed = Too Late!
    document.body.style.backgroundColor = 'red'; // background color = red
    document.body.style.color = 'white'; // font color = white
} else if (date.getHours() > 18) { // if it's later than 6pm (but before 8pm) then run the below:
    h1.textContent = 'Good evening!'; // h1 text displayed = Good evening!
    document.body.style.backgroundColor = 'black'; // background color = black
    document.body.style.color = 'white'; // font color = white
} else if (date.getHours() >= 12) { // if it's later than OR equal to 12 Noon (but before 6pm) then run the below:
    h1.textContent = 'Good afternoon!'; // h1 text displayed = Good afternoon!
    document.body.style.backgroundColor = 'green'; // background color = green
    document.body.style.color = 'yellow'; // font color = yellow
} else if (date.getHours() > 8) { // if it's later than 8am (but before 12 Noon) then run the below:
    h1.textContent = 'Good morning!'; // h1 text displayed = Good morning!
    document.body.style.backgroundColor = 'yellow'; // background color = yellow
    document.body.style.color = 'white'; // font color = white
} else if (date.getHours() < 8) { // if it's earlier than 8am then run the below:
    h1.textContent = 'Too Early!'; // h1 text displayed = Too Early!
} 


// const age = prompt('What is your age?');

// if (age >= 18) {
//     alert('You are old enough to use this site!');
// } else if (age > 12 && confirm('Do you have your parents permission to use this site?')) {
//     alert('You are able to use this site.');
// } else {
//     alert('Sorry, you are too young to use this site.');
// }


const confirmBox = document.querySelector('.overlay'); // selects the html item containing the class of 'overlay'

h1.addEventListener('click', () => {    
    confirmBox.classList.remove('hidden'); // upon 'click', the modal pops up
})

const buttons = document.querySelectorAll('button'); // returns the answer 'yes' and hides the modal
buttons[0].addEventListener('click', () => {
    confirmBox.classList.add('hidden');
    console.log('user clicked yes');
})
buttons[1].addEventListener('click', () => { // returns the answer 'no' and hides the modal
    confirmBox.classList.add('hidden');
    console.log('user clicked no');
})
buttons[2].addEventListener('click', () => { // returns the answer 'maybe' and hides the modal
    confirmBox.classList.add('hidden');
    console.log('user clicked maybe');
})

document.querySelector('.overlay').addEventListener('click', (e) => { // allows you to click out of the modal & have it automatically close
    if (e.target.classList.contains('overlay')) {
        confirmBox.classList.add('hidden');
    }
});



function getValidEmail() {
    // Edge casing: has to do with a situation when a user uses something incorrectly. It forces them to do what you intended.
    const email = prompt('What is your email?');
    if (email.length > 8 && email.includes('@') && email.includes('.com')) {
        alert('Thanks for sharing your email!');
    } else {
        alert('Please enter your email!');
        getValidEmail();
    }
}
getValidEmail();
