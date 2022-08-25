// Day 2 - Daily Challenge

const word = 'Supercalifragilisticexpialidocious';

console.log(word);
console.log(word.length); // answer = 34
console.log(typeof word); // 'type of' = 'string' data type


const numero = 1234567890;

console.log(numero);
console.log(typeof numero); // 'type of' = 'number' data type


// a BigInt number can be called in either of the following two ways:

const bigNum = 210354760854313518574646313467464361343434123479874541354n; // by adding an 'n' to the end of the integer

const sameBigNum = BigInt('210354760854313518574646313467464361343434123479874541354'); // by using the 'BigInt' function

console.log(bigNum); // because we added 'n' to the end of the number, it turned the integer into a 'BigInt' number data type & was able to console.log it as shown
console.log(sameBigNum); // 'bigNum' and 'sameBigNum' display exactly the same in the console

console.log(typeof bigNum); // 'type of' = 'BigInt' data type
console.log(typeof sameBigNum);  // 'type of' = 'BigInt' data type