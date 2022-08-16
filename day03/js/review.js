// answers
const primitives = {
    number: 0,
    string: '',
    boolean: true,
    undefined: undefined, // haven't decided, 'not sure' empty, haven't assigned a value yet so computer sets it as undefined
}

// sometimes needed for our computer to handle the memory-portion a bit
const others = {
    symbol: Symbol(),
    bigInt: BigInt(0),
}

// ways of organizing
const compound = { 
    array: [],
    object: {},
    null: null, // we've decided that this is empty, have purposefully not assigned a set value for this
}


// EXAMPLE:
const player1 = 'Ryu';
const player2 = 'Ken';

let selectedCharacter = null; // this would mean that we purposefully set it as null/undefined

function selectCharacter(character) {
    selectedCharacter = character;
}
function unselectedCharacter() {
    selectedCharacter = null;
}

var selectedStage = null;
selectedTeammate = null;

// scope -- global vs local
// redeclaration -- only var can redeclare, let & const do not allow you to

// var selectedStage = null;
// let selectedCharacter = null;

// DO NOT USE VAR UNLESS YOU HAVE A GOOD REASON TO DO SO


// OPERATORS
let x = 1; // using the = operator

// Arithmetic
// + - * / %
console.log(x + 1); // 2
console.log(x - 1); // 0
console.log(x * 10); // 10
console.log(x / 2); // 0.5
console.log(x); // x = 1 since it was never re-declared so 'x' keeps its value

// Assignment Operators
// = += -= *= /= %=
console.log(x += 1); // 2
console.log(x -= 1); // 1
console.log(x *= 10); // 10
console.log(x /= 2); // 5
console.log(x); // x = 5; value was reassigned since an assignment operator was used

// Comparison Operator
// < > <= >= == !=
// ALWAYS returns a Boolean answer
console.log(x < 1); // false
console.log(x > 1); // true
console.log(x <= 1); // false
console.log(x >= 1); // true
console.log(x == 1); // false
console.log(x != 1); // true

// Logical Operator
// && || ! (<== 'strict/super 'and'', 'or', 'not')
console.log(x < 1 && x > 1); // false
console.log(x < 1 || x > 1); // true
console.log(! (x != 5)); // NOT not = 5 --> true because it DOES = 5

// Conditional Operators
// if else
// switch case
// ternary operator

