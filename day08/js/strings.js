const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let abcs = 'abcdefghijklmnopqrstuvwxyz';

const index = 25;

console.log(letters[index]);
console.log(abcs[index]);


for(let i = 0; i < 26; i++) {
    console.log(letters[i]);
    console.log(abcs[i]);
}

const object = {
    sayHello: function() {}
};

console.log(object.sayHello());

letters.pop(); // pop --> gives you access to the very 'top' / last item of an array. Imagine a stack of books, you can only access the top one without toppling over the stack
console.log(letters);


// strings are immutable (cannot be changed). You can only ever add to it or replace parts of it; this results in a brand new string
abcs = abcs.replace('z', '');
console.log(abcs);

letters.splice(-1, 2, 'C', 'D'); // this specifies what we want to remove & what we want to add in it's place (the addition is optional & not required)
console.log(letters);

// ! look up string methods & array methods