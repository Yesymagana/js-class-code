const primitiveDataTypes = {
    string: 'string',
    number: 'number',
    boolean: 'boolean'
};

const dataTypes = [
    'string',
    'number',
    'boolean'
];

const falsey = {
    false: false, // boolean
    0: 0, // number
    '': '', // string

    NaN: NaN, // number, 'Not a Number'
    null: null, // object
    undefined: undefined // undefined
};

// truthy is every other value

if ('hello world') {
    console.log('hello world');
}

if ('NaN') { // this is TRUTHY because it is not an empty string (trick question!)
    console.log('NaN');
}

if (0) { // this is FALSE & will not run
    console.log('0');
}

if ('0') { // this is true since it's not an empty string
    console.log(true);
}

if (0) { 
    console.log(0);
} else if ('0') { 
    console.log(1);
}

const value = Math.random();
// a random number between 0 and 1
// always a decimal number

const randomNumber = value * 100;
// a random number between 0 and 100
// always a decimal number

let randomNumberInt = Math.floor(randomNumber);
// a random Integer between 0 and 100
// always an integer number
// does NOT include 100 (rounds DOWN)

randomNumberInt = Math.ceil(randomNumber);
// a random Integer between 0 and 100
// always an integer number
// does NOT include 0 (rounds UP)

randomNumberInt = Math.round(randomNumber);
// a random Integer between 0 and 100
// always an integer number
// includes 0 and 100 (rounds to NEAREST number)

const randomDecade = [
    '1960',
    '1970',
    '1980',
    '1990',
    '2000',
    '2010'
];

const randomDecadeInt = Math.floor(Math.random() * randomDecade.length);
// a random Integer between 0 and 5
// always an integer number
// does NOT include 5 (rounds DOWN)

const randomDecadeString = randomDecade[randomDecadeInt];
console.log(randomDecadeString);

const date = new Date();
const currentYear = date.getFullYear();
const randomYear = Math.floor(Math.random() * (currentYear - 1960 + 1) + 1960);
console.log(randomYear);


// what is scope?
// scope is where a variable is available!
// whenever you're not in a function or block of code or object, then you are in the GLOBAL scope

function myFunction() {
    const myVariable = 'hello'; // this works within the LOCAL scope of this function
    console.log(myVariable);
}

myFunction();

let object = {
    myVariable: 'hello',
    myFunction: function() {
        console.log(this.myVariable);
    }
}

if (true) {
    const myVariable = 'hello';
    console.log(myVariable);
}

{ // anywhere you see curly braces {} this is a block scope
    const myVariable = 'hello';
    console.log(myVariable);
}

// console.log(myVariable); // this is calling it from the global scope

function createTitles(text) {
    const element = document.createElement('h1');
    element.innerText = text;
    document.body.appendChild(element);
}

createTitles('hello');
createTitles('world');

const player1 = {
    username: 'John',
    health: 100,
    weapon: 'sword',
    attack() {
        return this.weapon;
    },
    takeDamage() {
        this.health -=10;
        console.log(this)
    }
}

const player2 = {
    username: 'Jane',
    health: 100,
    weapon: 'sword',
    attack() {
        return this.weapon;
    },
    takeDamage() {
        this.health -=10;
        console.log(this)
    }
}

console.log(player1.username); // since the username, etc is all located within the LOCAL scope of the function, you can't access it unless you first call the variable that we have global access to. It's written ==> player1.username or player2.health, etc.

const name = 'earth/globe';
function country() { // parent & child scopes
    const name = 'USA';
    const capital = 'Washington D.C.'
    console.log(name);
    function state() {
        const name = 'California';
        const capital = 'Sacramento'
        console.log(name);
            function city() {
                const name = 'Fresno';
                const capital = 'Bitwise';
                console.log(name);
                console.log(capital);
            }
            city();

            (() => {
            
                console.log(name);
                const capital = 'Bitwise';
                console.log(capital);
            })();
    }
    state();
    function state2(){
        name = 'Texas';
        console.log(name);
    }
}
country();

const player = {
    player: {
        player: {
            player: {}
        }
    }
}

console.log(player.player.player.player); // this goes into the object and calls deeper into it

function createBankAccount() {
    let balance = 0;
    let transactions = [];
    let accountNumber = Math.floor(Math.random() * 1000000);
    return {
        deposit(amount) {
            balance += amount;
            console.log(balance);
            transactions.push({
                type: 'deposit',
                amount: amount,
            })
        },
        withdraw(amount) {
            balance -= amount;
            console.log(balance);
            transactions.push({
                type: 'withdraw',
                amount: amount,
            })
        },
        last4Transactions() {
            return {
                transactions: transactions.slice(-4),
                accountNumber: accountNumber,
            }
        }
    }
}

const bankAccount1 = createBankAccount();
const bankAccount2 = createBankAccount();

// a parent scope CANNOT access a child scope
// a child scope CAN access a parent scope
// a sibling scope CANNOT access a sibling scope
// scope first checks the local scope, then the parent(s) scope, then the global scope -- it goes UP the tree
// it will show an error if it goes all the way up the tree and does not find what you're calling

// parents are giving -- they give access to their children
// children are stingy -- they don't give access to their parents or their siblings 

const player3 = {
    username: 'John',
    friends: ['Jane', 'Bob', 'John'],

    hasSameName(){
        return this.friends.some((friend) => {
            console.log(this);
            return this.username === friend;
        });
    }
}

console.log(player3.hasSameName());



// ? look up function vs arrow function 